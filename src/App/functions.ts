import { groupBy, take } from "ramda";
import { Message, SimpleMessage } from "./types";

const _10 = take<SimpleMessage>(10);

export function groupMessages(messages: Message[]) {
  const simpleMsgs = messages.map(simplifyMsgs);
  const grouped = groupBy(e => e.status, simpleMsgs);
  const delivered = _10(grouped.delivered || []);
  const received = _10(grouped.received || []);
  return { delivered, received };
}

export function pollForUpdates(updateMessages: () => Promise<void>) {
  return () => {
    const handle = setInterval(updateMessages, 10000);
    updateMessages();
    return () => clearInterval(handle);
  };
}

function simplifyMsgs({
  to,
  from,
  body,
  status,
  date_sent,
}: Message): SimpleMessage {
  return {
    to,
    from,
    body,
    status,
    date: new Date(date_sent).toLocaleDateString("en-US"),
    time: new Date(date_sent).toLocaleTimeString("en-US", { hour12: false }),
  };
}

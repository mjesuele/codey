import { groupBy, take, uniq } from "ramda";
import { pretty } from "../util/pretty";
import { Message, SimpleMessage } from "./types";
import { getName } from "../phonebook";
import book from "../phonebook/book.secrets";

export function formatSimpleMsgs(simpleMsgs: SimpleMessage[]) {
  const prettyMsgs = pretty(simpleMsgs);
  const numbers = uniq(prettyMsgs.match(/\+1\d{10}/g) || []);
  const msgsWithNames = numbers.reduce((txt, number) => {
    const name = getName(number, book);
    const regex = new RegExp(`\\${number}`, "g");
    return name ? txt.replace(regex, name) : txt;
  }, prettyMsgs);

  return msgsWithNames;
}

const _5 = take<SimpleMessage>(5);

export function groupMessages(messages: Message[]) {
  const simpleMsgs = messages.map(simplifyMsgs);
  const grouped = groupBy(e => e.status, simpleMsgs);
  const delivered = _5(grouped.delivered || []);
  const received = _5(grouped.received || []);
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

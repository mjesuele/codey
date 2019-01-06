import { Code } from "./../components/Code";
import React, { useState, useEffect } from "react";
import { Message, SimpleMessage } from "./types";
import { pollForUpdates, groupMessages, formatSimpleMsgs } from "./functions";
import { fetchMessages } from "../api";
import EditorContainer from "../components/Editor/index.container";

export default function App() {
  const [response, setResponse] = useState("");
  const [delivered, setDelivered] = useState<SimpleMessage[]>([]);
  const [received, setReceived] = useState<SimpleMessage[]>([]);

  const updateMessages = () =>
    fetchMessages().then(ms => {
      const grouped = groupMessages(ms.messages);
      setDelivered(grouped.delivered);
      setReceived(grouped.received);
    });

  useEffect(pollForUpdates(updateMessages), []);

  return (
    <div className="App">
      <h1>Codey</h1>
      <EditorContainer {...{ setResponse }} />
      <div>
        Response: <Code>{response}</Code>
      </div>
      <div>
        Messages From Codey: <Code>{formatSimpleMsgs(delivered)}</Code>
      </div>
      <div>
        Messages To Codey: <Code>{formatSimpleMsgs(received)}</Code>
      </div>
    </div>
  );
}

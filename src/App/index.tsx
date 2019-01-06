import { Code } from "./../components/Code";
import React, { useState, useEffect } from "react";
import { SimpleMessage } from "./types";
import { pollForUpdates, groupMessages } from "./functions";
import { fetchMessages } from "../api";
import EditorContainer from "../components/Editor/index.container";
import styled from "styled-components";
import FormattedMsg from "../components/FormattedMsg";

const Table = styled.table`
  table-layout: fixed;
  width: 100%;

  td {
    overflow: auto;
    vertical-align: top;
  }
`;

export default function App(props: { className?: string }) {
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
    <Table {...props}>
      <tbody>
        <tr>
          <td>
            <h1>Codey</h1>
            <EditorContainer {...{ setResponse }} />
          </td>
          <td>
            Response: <Code>{response}</Code>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Outbox</h3>
            {renderMsgs(delivered)}
          </td>
          <td>
            <h3>Inbox</h3>
            {renderMsgs(received)}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

function renderMsgs(msgs: SimpleMessage[]) {
  return msgs.map(msg => (<FormattedMsg key={msgKey(msg)} msg={msg} />));
}

export function msgKey(msg: SimpleMessage): string | number | undefined {
  return `${msg.date}${msg.time}${msg.from}`;
}

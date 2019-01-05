import { Code } from "./../components/Code";
import React, { useState, useEffect } from "react";
import { Message, Encoding } from "./types";
import { Editor } from "../components/Editor";
import {
  getHandlers,
  pollForUpdates,
  groupMessages,
  formatSimpleMsgs,
} from "./functions";

export default function App() {
  const [text, setText] = useState("");
  const [tel, setTel] = useState("");
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [encoding, setEncoding] = useState<Encoding>("none");

  const {
    updateMessages,
    onChangeEncoding,
    onChangeText,
    onChangeTel,
    onClick,
  } = getHandlers({
    encoding,
    setEncoding,
    setMessages,
    setResponse,
    setTel,
    setText,
    tel,
    text,
  });

  useEffect(pollForUpdates(updateMessages), []);

  const { delivered, received } = groupMessages(messages);

  return (
    <div className="App">
      <h1>Codey</h1>
      <Editor
        {...{
          encoding,
          onChangeEncoding,
          onChangeText,
          text,
          onChangeTel,
          tel,
          onClick,
        }}
      />
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

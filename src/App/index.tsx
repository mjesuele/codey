import { Code } from "./../components/Code";
import React, { useState, useEffect } from "react";
import { Message, EncodingName, SimpleMessage } from "./types";
import { Editor, EditorProps } from "../components/Editor";
import {
  getHandlers,
  pollForUpdates,
  groupMessages,
  formatSimpleMsgs,
} from "./functions";
import * as encodings from "../encodings";

export default function App() {
  const [text, setText] = useState("this is a test sentence");
  const [tel, setTel] = useState("");
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [encoding, setEncoding] = useState<EncodingName>("l33t");
  const [encoded, setEncoded] = useState(encodings[encoding](text));
  const [delivered, setDelivered] = useState<SimpleMessage[]>([]);
  const [received, setReceived] = useState<SimpleMessage[]>([]);

  const {
    updateMessages,
    onChangeEncoding,
    onChangeText,
    onChangeTel,
    onClick,
  } = getHandlers({
    encoded,
    setEncoding,
    setMessages,
    setResponse,
    setTel,
    setText,
    tel,
  });

  useEffect(pollForUpdates(updateMessages), []);
  useEffect(() => setEncoded(encodings[encoding](text)), [text, encoding]);
  useEffect(
    () => {
      const grouped = groupMessages(messages);
      setDelivered(grouped.delivered);
      setReceived(grouped.received);
    },
    [messages],
  );

  const editorProps: EditorProps = {
    encoded,
    encoding,
    onChangeEncoding,
    onChangeText,
    text,
    onChangeTel,
    tel,
    onClick,
  };

  return (
    <div className="App">
      <h1>Codey</h1>
      <Editor {...editorProps} />
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

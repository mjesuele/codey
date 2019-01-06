import React, {
  useState,
  useEffect,
  MouseEventHandler,
  ChangeEvent,
} from "react";
import { Editor } from ".";
import { Dispatch, EncodingName } from "../../App/types";
import * as encodings from "../../encodings";
import { sendMessage } from "../../api";
import { pretty } from "../../util/pretty";
import { DivProps } from "../../types/elementProps";

export type EditorContainerProps = DivProps & {
  setResponse: Dispatch<string>;
};

export default function EditorContainer({ setResponse, ...props }: EditorContainerProps) {
  const [text, setText] = useState("this is a test sentence");
  const [tel, setTel] = useState("");
  const [encoding, setEncoding] = useState<EncodingName>("l33t");
  const [encoded, setEncoded] = useState(encodings[encoding](text));

  useEffect(() => setEncoded(encodings[encoding](text)), [text, encoding]);

  const onSend: MouseEventHandler = e => {
    e.preventDefault();
    sendMessage(tel, encoded).then(r => setResponse(pretty(r)));
  };
  const onChangeEncoding = (e: ChangeEvent<HTMLSelectElement>) =>
    setEncoding(e.currentTarget.value as EncodingName);
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.currentTarget.value);
  const onChangeTel = (e: ChangeEvent<HTMLInputElement>) =>
    setTel(e.currentTarget.value);
  const onSelectNumber = (pn: string) =>
    setTel(pn);

  const encodingNames = [
    // "none" should always come first
    "none",
    ...keys(encodings).filter(k => k !== "none"),
  ] as EncodingName[];

  return (
    <Editor
      {...{
        encoded,
        encoding,
        encodingNames,
        onChangeEncoding,
        onSelectNumber,
        onChangeText,
        onChangeTel,
        onSend,
        tel,
        text,
        ...props,
      }}
    />
  );
}

function keys<T extends Object>(obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}

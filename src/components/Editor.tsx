import React from "react";
import * as encodings from "../encodings";
import { EncodingName } from "../App/types";

type EditorProps = {
  encoded: string;
  encoding: EncodingName;
  onChangeEncoding: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeTel: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
  tel: string;
  text: string;
};

export function Editor({
  encoded,
  encoding,
  onChangeEncoding,
  onChangeTel,
  onChangeText,
  onClick,
  tel,
  text,
}: EditorProps) {
  const encodingNames = [
    // "none" should always come first
    "none",
    ...keys(encodings).filter(k => k !== "none"),
  ] as EncodingName[];

  return (
    <div>
      <div>
        <textarea rows={5} cols={50} onChange={onChangeText} value={text} />
      </div>
      <div>
        <select onChange={onChangeEncoding} value={encoding}>
          {encodingNames.map(k => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </div>
      <div>
        <p>{encoded}</p>
      </div>
      <div>
        Send to: <input type="tel" onChange={onChangeTel} value={tel} />
        <button {...{ onClick }}>Send</button>
      </div>
    </div>
  );
}

function keys<T extends Object>(obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}

import React from "react";
import * as encodings from "../../encodings";
import { EncodingName } from "../../App/types";
import { DivProps } from "../../types/elementProps";
import book from "../../phonebook/book.secrets";

function preventDefault(f: Function) {
  return (e: React.SyntheticEvent) => {
    e.preventDefault();
    f();
  }
}

export type EditorProps = DivProps & {
  encoded: string;
  encoding: EncodingName;
  encodingNames: EncodingName[];
  onChangeEncoding: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeTel: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSelectNumber: (phoneNumber: string) => void;
  onSend: (event: React.MouseEvent<Element, MouseEvent>) => void;
  tel: string;
  text: string;
};

export function Editor({
  encoded,
  encoding,
  encodingNames,
  onChangeEncoding,
  onSelectNumber,
  onChangeTel,
  onChangeText,
  onSend,
  tel,
  text,
  ...props
}: EditorProps) {
  return (
    <div {...props}>
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
        <button onClick={onSend}>Send</button>
      </div>
      <div>
        <h2>Phonebook</h2>
        {book.map(({ name, numbers }) => {
          const number = numbers[0];
          return !!number && (<button key={name} onClick={preventDefault(() => onSelectNumber(number))}>{name}</button>);
        })}
      </div>
    </div>
  );
}

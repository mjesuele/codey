import React from "react";
import { EncodingName } from "../../App/types";
import { DivProps } from "../../types/elementProps";
import book from "../../phonebook/book.secrets";
import preventDefault from "../../util/preventDefault";
import styled from "styled-components";

const Container = styled.div`
  &,
  button,
  input,
  textarea,
  select {
    font-size: 1em;
  }
`;

const Section = styled.section`
  margin-bottom: 2em;
`;

const Input = styled.input`
  padding: .5em 1em;
`;

const Button = styled.button`
  all: unset;

  cursor: pointer;
  color: white;
  background-color: dodgerblue;
  margin: 1em 0;
  padding: .5em 1em;

  * + & {
    margin-left: 1em;
  }
`;

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
    <Container {...props}>
      <Section>
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
      </Section>
      <Section>
        <p>{encoded}</p>
      </Section>
      <Section>
        <div>
          <Input type="tel" onChange={onChangeTel} placeholder="Recipient phone number" value={tel} />
          <Button onClick={onSend}>Send</Button>
        </div>
        <div>
          {book.map(({ name, numbers }) => {
            const number = numbers[0];
            return (
              !!number && (
                <Button
                  key={name}
                  onClick={preventDefault(() => onSelectNumber(number))}
                >
                  {name}
                </Button>
              )
            );
          })}
        </div>
      </Section>
    </Container>
  );
}

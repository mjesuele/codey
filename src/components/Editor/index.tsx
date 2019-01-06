import { BookButtons } from '../BookButtons';
import React from "react";
import { EncodingName } from "../../App/types";
import { DivProps } from "../../types/elementProps";
import book from "../../phonebook/book.secrets";
import styled from "styled-components";
import Button from '../Button';
import { PX } from '../../types/PX';

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
  padding: 0.5em;
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
}: PX<EditorProps>) {
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
          <Input
            type="tel"
            onChange={onChangeTel}
            placeholder="Recipient phone number"
            value={tel}
          />
          <Button onClick={onSend}>Send</Button>
        </div>
        <div>
          <BookButtons {...{ book, onSelectNumber }}/>
        </div>
      </Section>
    </Container>
  );
}

import React, { ReactNode } from "react";
import { Phonebook } from "../phonebook";
import preventDefault from "../util/preventDefault";
import Button from "./Button";
import { DivProps } from "../types/elementProps";
import { PX } from "../types/PX";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em 0;

  > * {
    flex-basis: 1;
  }
`;

type Props = DivProps & {
  book: Phonebook;
  onSelectNumber: (phoneNumber: string) => void;
};

export function BookButtons({ book, onSelectNumber, ...props }: PX<Props>) {
  return (
    <Container {...props}>
      {book.map(({ name, numbers }) => {
        const number = numbers[0];
        const onClick = preventDefault(() => onSelectNumber(number));
        return (
          !!number && (
            <Button key={name} {...{ onClick }}>
              {name}
            </Button>
          )
        );
      })}
    </Container>
  );
}

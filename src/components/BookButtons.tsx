import React, { ReactNode } from "react";
import { Phonebook } from "../phonebook";
import preventDefault from "../util/preventDefault";
import Button from "./Button";

type Props = {
  book: Phonebook;
  onSelectNumber: (phoneNumber: string) => void;
};

export function BookButtons({ book, onSelectNumber }: Props) {
  return (
    <>
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
    </>
  );
}

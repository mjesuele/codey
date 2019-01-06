import React, { ReactNode } from "react";
import { Phonebook } from "../phonebook";
import preventDefault from "../util/preventDefault";
import Button from "./Button";
import { DivProps } from "../types/elementProps";
import { PX } from "../types/PX";

type Props = DivProps & {
  book: Phonebook;
  onSelectNumber: (phoneNumber: string) => void;
};

export function BookButtons({ book, onSelectNumber, ...props }: PX<Props>) {
  return (
    <div {...props}>
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
    </div>
  );
}

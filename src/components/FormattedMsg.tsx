import React, { useMemo } from "react";
import { SimpleMessage, Status } from "../App/types";
import { getName } from "../phonebook";
import book from "../phonebook/book.secrets";
import styled from "styled-components";
import { DivProps } from "../types/elementProps";
import { PX } from "../types/PX";

const Msg = styled.div`
  margin-bottom: 1.5em;
`;

const Header = styled.header`
  font-size: 0.8em;
  font-weight: bold;
`;

const Name = styled.span`
  color: #222;
`;

const DateTime = styled.time`
  color: dimgray;
  display: block;
  margin: 0.1em 0 0.5em;
`;

type Props = DivProps & { msg: SimpleMessage };

export default function FormattedMsg({
  msg, msg: { body, date, from, time, status, to },
  ...props
}: PX<Props>) {
  const [number, direction] =
    status === Status.Delivered ? [to, "To"] : [from, "From"];
  const name = useMemo(() => (getName(number, book) || number), [msg]);
  return (
    <Msg {...props}>
      <Header>
        <Name>
          {direction} {name}
        </Name>
        <DateTime>
          {date}
          <br />
          {time}
        </DateTime>
      </Header>
      <span>{body}</span>
    </Msg>
  );
}

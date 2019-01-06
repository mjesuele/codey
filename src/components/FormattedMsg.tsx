import React from "react";
import { SimpleMessage, Status } from "../App/types";
import { getName } from "../phonebook";
import book from "../phonebook/book.secrets";
import styled from "styled-components";

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
  margin: .1em 0 .5em;
`;

type Props = { msg: SimpleMessage };

export default function FormattedMsg({
  msg: { body, date, from, time, status, to },
}: Props) {
  const [number, direction] =
    status === Status.Delivered ? [to, "To"] : [from, "From"];
  const name = getName(number, book) || number;
  return (
    <Msg>
      <Header>
        <Name>
          {direction} {name}
        </Name>
        <DateTime>{date}<br />{time}</DateTime>
      </Header>
      <span>{body}</span>
    </Msg>
  );
}

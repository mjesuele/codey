import React from "react";
import { Message } from "./types";
import * as encodings from "../encodings";

export interface Messages {
  first_page_uri: string;
  end: number;
  previous_page_uri: null;
  messages: Message[];
  uri: string;
  page_size: number;
  start: number;
  next_page_uri: string;
  page: number;
}
export interface Message {
  sid: string;
  date_created: string;
  date_updated: string;
  date_sent: string;
  account_sid: string;
  to: string;
  from: string;
  messaging_service_sid: null;
  body: string;
  status: Status;
  num_segments: string;
  num_media: string;
  direction: Direction;
  api_version: string;
  price: string;
  price_unit: PriceUnit;
  error_code: null;
  error_message: null;
  uri: string;
  subresource_uris: SubresourceUris;
}
export type SimpleMessage = {
  to: string;
  from: string;
  body: string;
  status: Status;
  date: string;
  time: string;
};
export enum Direction {
  Inbound = "inbound",
  OutboundAPI = "outbound-api",
  OutboundReply = "outbound-reply",
}
export enum PriceUnit {
  Usd = "USD",
}
export enum Status {
  Delivered = "delivered",
  Received = "received",
}
export interface SubresourceUris {
  media: string;
}
type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;
export type Encoding = keyof typeof encodings;
export type HandlerProps = {
  encoding: Encoding;
  setEncoding: Dispatch<Encoding>;
  setMessages: Dispatch<Message[]>;
  setResponse: Dispatch<string>;
  setTel: Dispatch<string>;
  setText: Dispatch<string>;
  tel: string;
  text: string;
};

import { sid } from "../secrets";
import { apiCall } from "./apiCall";
import HttpMethod from "./HttpMethod";
import { Messages, Message } from "../App/types";

export const fetchMessages = (): Promise<Messages> =>
  apiCall(Endpoints.Messages);

export const sendMessage = (to: string, text: string): Promise<Message> =>
  apiCall(Endpoints.Messages, HttpMethod.Post, {
    To: to,
    From: "+12139960130",
    Body: text,
  });

const Endpoints = {
  Messages: `/Accounts/${sid}/Messages.json`,
};

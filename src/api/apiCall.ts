import qs from "qs";
import HttpMethod from "./HttpMethod";
import auth from "./auth";

const headers = new Headers();
headers.set("Authorization", "Basic " + auth);
headers.set("Content-Type", "application/x-www-form-urlencoded");

const baseUrl = "https://api.twilio.com/2010-04-01";
export const apiPath = (s: string) => `${baseUrl}${s}`;

export const apiCall = (
  path: string,
  method = HttpMethod.Get,
  data: any = {},
) => {
  const body = method !== HttpMethod.Get ? { body: qs.stringify(data) } : {};
  return fetch(apiPath(path), { method, headers, ...body }).then(r => r.json());
};

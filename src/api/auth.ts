import { sid, token } from "../secrets";
export default Buffer.from(`${sid}:${token}`).toString("base64");

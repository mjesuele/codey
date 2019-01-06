import { sid, token } from "../secrets";
import base64 from "../util/base64";
export default base64(`${sid}:${token}`);

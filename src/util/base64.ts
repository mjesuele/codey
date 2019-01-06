export default function base64(s: string) {
  return Buffer.from(s).toString("base64");
}

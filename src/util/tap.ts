export default function tap<T>(o: T, f = console.trace) {
  f(o);
  return o;
}

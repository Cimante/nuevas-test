export function removeProperties<T extends object>(
  obj: T,
  ...props: (keyof T)[]
): Partial<T> {
  const newObj = { ...obj };
  for (const prop of props) {
    delete newObj[prop];
  }
  return newObj;
}

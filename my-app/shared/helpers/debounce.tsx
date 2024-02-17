export const objectsEqual = (
  o1: { [x: string]: any },
  o2: { [x: string]: any }
): boolean =>
  typeof o1 === 'object' && Object.keys(o1).length > 0 && typeof o2 === 'object'
    ? Object.keys(o1).length === Object.keys(o2).length &&
      Object.keys(o1).every((p) => objectsEqual(o1[p], o2[p]))
    : o1 === o2;

export const arraysEqual = (a1: any[], a2: string | any[]) =>
  a1.length === a2.length &&
  a1.every((o: any, idx: string | number) =>
    objectsEqual(o, a2[idx as number])
  );

type DebouncedFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): DebouncedFunction<T> {
  let timeoutId: NodeJS.Timeout;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

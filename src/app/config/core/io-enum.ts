import * as t from 'io-ts';

export const createEnum = <E>(e: object, name: string): t.Type<E> => {
  const keys = {};
  Object.keys(e).forEach((key) => keys[e[key]]);

  return t.keyof(keys, name) as any;
}

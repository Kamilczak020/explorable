import * as t from 'io-ts';
import { isRight } from 'fp-ts/lib/Either';
import { readFileSync, existsSync } from 'fs';
import { DEFAULT_SAFE_SCHEMA, safeLoad, Schema } from 'js-yaml';
import { regexpType } from './regexp';
import { rangeType } from './range';
import { envType } from './env';

export const CONFIG_SCHEMA = Schema.create([DEFAULT_SAFE_SCHEMA], [
  regexpType,
  rangeType,
  envType,
]);

export function loadConfig<T>(codec: t.Type<T>, path: string): T {
  const fileData = readFileSync(path, 'utf8');
  if (!existsSync(path)) {
    throw new Error('Cannot find configuration file to load.');
  }

  const data = safeLoad(fileData, { schema: CONFIG_SCHEMA });
  const result = codec.decode(data);

  if (isRight(result)) {
    return result.right;
  } else {
    throw new Error(`Configuration schema does not match: ${path}.`);
  }
}

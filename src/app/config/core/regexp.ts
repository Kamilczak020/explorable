import { Type as YamlType } from 'js-yaml';
import { exists } from '../../util';

export const REGEXP_REGEXP = /\/(.*)\/([gimuy]*)/;

export const regexpType = new YamlType('!regexp', {
  kind: 'scalar',
  resolve(value: string) {
    return REGEXP_REGEXP.test(value);
  },
  construct(value: string): RegExp {
    try {
      const match = REGEXP_REGEXP.exec(value);
      if (!exists(match)) {
        throw new Error('Invalid regexp.');
      }

      const [/* input */, expr, flags] = Array.from(match);
      return new RegExp(expr, flags);
    } catch (error) {
      throw new Error('Invalid regexp.');
    }
  },
});

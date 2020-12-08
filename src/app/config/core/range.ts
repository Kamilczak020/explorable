import { Type as YamlType } from 'js-yaml';
import { Range, exists } from '../../util';
import { fromRefinement } from 'io-ts-types';
import * as t from 'io-ts';

const REGEXP = /(-?\d+):(-?\d+)/;

export const rangeType = new YamlType('!range', {
  kind: 'scalar',
  resolve(value: string) {
    return REGEXP.test(value);
  },
  construct(value: string): Range {
    const match = REGEXP.exec(value);
    if (!exists(match)) {
      throw new Error('Invalid range.');
    }

    const [/* input */, left, right] = match;
    const min = Math.min(parseInt(left, 10), parseInt(right, 10));
    const max = Math.max(parseInt(left, 10), parseInt(right, 10));
    return new Range(min, max);
  },
});

export interface RangeC extends t.Type<Range, Range> { }
const isRange = (u: unknown): u is Range => u instanceof Range;

export const TRange: RangeC = fromRefinement('Range', isRange);

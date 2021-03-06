import { Type as YamlType } from 'js-yaml';

export const envType = new YamlType('!env', {
  kind: 'scalar',
  resolve(name: string) {
    if (Reflect.has(process.env, name)) {
      return true;
    } else {
      throw new Error(`environment variable not found: ${name}`);
    }
  },
  construct(name: string) {
    return Reflect.get(process.env, name);
  },
});

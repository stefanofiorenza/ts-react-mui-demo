interface KeyValue {
  key: string,
  value: string
}

export const getEnvironmentParams = (): Array<KeyValue> => {
  const values: Array<KeyValue> = [];

  for (let key in process.env) {
    values.push({
      key: key,
      value: process.env[key]!
    });
  }

  return values;
};
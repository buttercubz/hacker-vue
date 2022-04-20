export function paginateArray<T extends any>(array: T[], pageSize: number) {
  return array.reduce((acc, value, index) => {
    const id = Math.floor(index / pageSize);
    const page = acc[id] ?? (acc[id] = []);

    page.push(value);

    return acc;
  }, [] as Array<Array<T>>);
}

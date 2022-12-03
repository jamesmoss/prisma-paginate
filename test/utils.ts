const data = [{ id: 1 }, { id: 2 }, { id: 3 }] as const;
const model = {
  findMany: jest.fn(async ({ where }: any) =>
    data.find(({ id }) => where.id == id)
  ),
  count: jest.fn(async () => data.length),
};

export { data, model };

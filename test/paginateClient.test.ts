import paginator from "../src";
import { client } from "./utils";

describe("paginateClient", () => {
  const paginate = paginator(client);

  it("paginate", () => {
    paginate.model.paginate({}, { page: 1, limit: 10 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toBeTruthy();
    });
  });

  it("paginate", () => {
    paginate.model.paginate({}, { page: 1, limit: 10 }).then((result) => {
      expect(result?.result).toBeTruthy();
    });
  });

  it("other methods", () => {
    expect(paginate.model.findMany).toBeInstanceOf(Function);
    expect(paginate.model.findUnique).toBeInstanceOf(Function);
    expect(paginate.model.findFirst).toBeInstanceOf(Function);
    expect(paginate.model.count).toBeInstanceOf(Function);
  });
});
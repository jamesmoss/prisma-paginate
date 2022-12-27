import { Paginate } from "../src";
import { TotalPagesExceed } from "../src/errors";
import {
  mockModelResult,
  mockModel,
  model,
  modelDelete,
  modelCreate,
  modelResult,
} from "./utils";

describe("prisma", () => {
  beforeEach((done) => {
    modelCreate().finally(done);
  });

  afterEach((done) => {
    modelDelete().finally(done);
  });

  it("without pagination", (done) => {
    new Paginate(model)
      .paginate({})
      .then((result) => {
        expect(result).toStrictEqual(modelResult);
        expect(result).not.toHaveProperty([
          "count",
          "hasNextPage",
          "hasPrevPage",
          "limit",
          "page",
          "totalPages",
        ]);
      })
      .finally(done);
  });

  it("without pagination", (done) => {
    new Paginate(model).paginate({}, (error, result) => {
      expect(error).toBe(null);
      expect(result).toStrictEqual(modelResult);
      expect(result).not.toHaveProperty([
        "count",
        "hasNextPage",
        "hasPrevPage",
        "limit",
        "page",
        "totalPages",
      ]);
      done();
    });
  });

  it("without pagination", (done) => {
    new Paginate(mockModel)
      .paginate({})
      .then((result) => {
        expect(result).toBeInstanceOf(Array);
        expect(result).not.toHaveProperty([
          "count",
          "hasNextPage",
          "hasPrevPage",
          "limit",
          "page",
          "totalPages",
        ]);
      })
      .finally(done);
  });

  it("without pagination", (done) => {
    Paginate.paginate(mockModel, {})
      .then((result) => {
        expect(result).toBeInstanceOf(Array);
        expect(result).not.toHaveProperty([
          "count",
          "hasNextPage",
          "hasPrevPage",
          "limit",
          "page",
          "totalPages",
        ]);
      })
      .finally(done);
  });

  it("without pagination", (done) => {
    new Paginate(mockModel).paginate({}, (error, result) => {
      expect(error).toBe(null);
      expect(result).toBeInstanceOf(Array);
      expect(result).not.toHaveProperty([
        "count",
        "hasNextPage",
        "hasPrevPage",
        "limit",
        "page",
        "totalPages",
      ]);
      done();
    });
  });

  it("without pagination", (done) => {
    new Paginate(model)
      .paginate({})
      .then((result) => {
        expect(result).toStrictEqual(modelResult);
        expect(result).not.toHaveProperty([
          "count",
          "hasNextPage",
          "hasPrevPage",
          "limit",
          "page",
          "totalPages",
        ]);
      })
      .finally(done);
  });

  it("without pagination", (done) => {
    Paginate.paginate(model, {}, (error, result) => {
      expect(error).toBe(null);
      expect(result).toStrictEqual(modelResult);
      expect(result).not.toHaveProperty([
        "count",
        "hasNextPage",
        "hasPrevPage",
        "limit",
        "page",
        "totalPages",
      ]);
      done();
    });
  });

  it("without pagination", (done) => {
    Paginate.paginate(mockModel, {}, (error, result) => {
      expect(error).toBe(null);
      expect(result).toBeInstanceOf(Array);
      expect(result).not.toHaveProperty([
        "count",
        "hasNextPage",
        "hasPrevPage",
        "limit",
        "page",
        "totalPages",
      ]);
      done();
    });
  });

  it("page == 0", (done) => {
    Paginate.paginate(mockModel, {}, { page: 0, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toBeInstanceOf(Array);
      expect(result?.count).toBe(mockModelResult.length);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(false);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(1);
      expect(result?.totalPages).toBe(mockModelResult.length);
      done();
    });
  });

  it("page == 0", (done) => {
    Paginate.paginate(mockModel, {}, { page: 0, limit: 1 })
      .then((result) => {
        expect(result.result).toBeDefined();
        expect(result.count).toBe(mockModelResult.length);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(false);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(1);
        expect(result.totalPages).toBe(mockModelResult.length);
      })
      .finally(done);
  });

  it("page == 0", (done) => {
    Paginate.paginate(model, {}, { page: 0, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toStrictEqual([{ id: 1 }]);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(false);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(1);
      done();
    });
  });

  it("page == 0", (done) => {
    Paginate.paginate(model, {}, { page: 0, limit: 1 })
      .then((result) => {
        expect(result.result).toStrictEqual([{ id: 1 }]);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(false);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(1);
      })
      .finally(done);
  });

  it("page == 0", (done) => {
    new Paginate(mockModel).paginate(
      {},
      { page: 0, limit: 1 },
      (error, result) => {
        expect(error).toBe(null);
        expect(result?.result).toBeInstanceOf(Array);
        expect(result?.count).toBe(mockModelResult.length);
        expect(result?.hasNextPage).toBe(true);
        expect(result?.hasPrevPage).toBe(false);
        expect(result?.limit).toBe(1);
        expect(result?.page).toBe(1);
        expect(result?.totalPages).toBe(mockModelResult.length);
        done();
      }
    );
  });

  it("page == 0", (done) => {
    new Paginate(mockModel)
      .paginate({}, { page: 0, limit: 1 })
      .then((result) => {
        expect(result.result).toBeDefined();
        expect(result.count).toBe(mockModelResult.length);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(false);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(1);
        expect(result.totalPages).toBe(mockModelResult.length);
      })
      .finally(done);
  });

  it("page == 0", (done) => {
    new Paginate(model).paginate({}, { page: 0, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toStrictEqual([{ id: 1 }]);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(false);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(1);
      done();
    });
  });

  it("page == 0", (done) => {
    new Paginate(model)
      .paginate({}, { page: 0, limit: 1 })
      .then((result) => {
        expect(result.result).toStrictEqual([{ id: 1 }]);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(false);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(1);
      })
      .finally(done);
  });

  it("page == 1", (done) => {
    Paginate.paginate(mockModel, {}, { page: 1, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toBeInstanceOf(Array);
      expect(result?.count).toBe(mockModelResult.length);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(false);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(1);
      done();
      expect(result?.totalPages).toBe(mockModelResult.length);
    });
  });

  it("page == 1", (done) => {
    Paginate.paginate(mockModel, {}, { page: 1, limit: 1 })
      .then((result) => {
        expect(result.result).toBeDefined();
        expect(result.count).toBe(mockModelResult.length);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(false);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(1);
        expect(result.totalPages).toBe(mockModelResult.length);
      })
      .finally(done);
  });

  it("page == 1", (done) => {
    Paginate.paginate(model, {}, { page: 1, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toStrictEqual([{ id: 1 }]);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(false);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(1);
      done();
    });
  });

  it("page == 1", (done) => {
    Paginate.paginate(model, {}, { page: 1, limit: 1 })
      .then((result) => {
        expect(result.result).toStrictEqual([{ id: 1 }]);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(false);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(1);
      })
      .finally(done);
  });

  it("page == 1", (done) => {
    new Paginate(mockModel).paginate(
      {},
      { page: 1, limit: 1 },
      (error, result) => {
        expect(error).toBe(null);
        expect(result?.result).toBeInstanceOf(Array);
        expect(result?.count).toBe(mockModelResult.length);
        expect(result?.hasNextPage).toBe(true);
        expect(result?.hasPrevPage).toBe(false);
        expect(result?.limit).toBe(1);
        expect(result?.page).toBe(1);
        expect(result?.totalPages).toBe(mockModelResult.length);
        done();
      }
    );
  });

  it("page == 1", (done) => {
    new Paginate(mockModel)
      .paginate({}, { page: 1, limit: 1 })
      .then((result) => {
        expect(result.result).toBeDefined();
        expect(result.count).toBe(mockModelResult.length);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(false);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(1);
        expect(result.totalPages).toBe(mockModelResult.length);
      })
      .finally(done);
  });

  it("page == 1", (done) => {
    new Paginate(model).paginate({}, { page: 1, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toStrictEqual([{ id: 1 }]);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(false);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(1);
      done();
    });
  });

  it("page == 1", (done) => {
    new Paginate(model)
      .paginate({}, { page: 1, limit: 1 })
      .then((result) => {
        expect(result.result).toStrictEqual([{ id: 1 }]);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(false);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(1);
      })
      .finally(done);
  });

  it("index == 2", (done) => {
    Paginate.paginate(mockModel, {}, { page: 2, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toBeInstanceOf(Array);
      expect(result?.count).toBe(mockModelResult.length);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(true);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(2);
      expect(result?.totalPages).toBe(mockModelResult.length);
      done();
    });
  });

  it("index == 2", (done) => {
    Paginate.paginate(mockModel, {}, { page: 2, limit: 1 })
      .then((result) => {
        expect(result.result).toBeDefined();
        expect(result.count).toBe(mockModelResult.length);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(true);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(2);
        expect(result.totalPages).toBe(mockModelResult.length);
      })
      .finally(done);
  });

  it("index == 2", (done) => {
    Paginate.paginate(model, {}, { page: 2, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toStrictEqual([{ id: 2 }]);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(true);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(2);
      done();
    });
  });

  it("index == 2", (done) => {
    Paginate.paginate(model, {}, { page: 2, limit: 1 })
      .then((result) => {
        expect(result.result).toStrictEqual([{ id: 2 }]);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(true);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(2);
      })
      .finally(done);
  });

  it("index == 2", (done) => {
    new Paginate(mockModel).paginate(
      {},
      { page: 2, limit: 1 },
      (error, result) => {
        expect(error).toBe(null);
        expect(result?.result).toBeInstanceOf(Array);
        expect(result?.count).toBe(mockModelResult.length);
        expect(result?.hasNextPage).toBe(true);
        expect(result?.hasPrevPage).toBe(true);
        expect(result?.limit).toBe(1);
        expect(result?.page).toBe(2);
        expect(result?.totalPages).toBe(mockModelResult.length);
        done();
      }
    );
  });

  it("index == 2", (done) => {
    new Paginate(mockModel)
      .paginate({}, { page: 2, limit: 1 })
      .then((result) => {
        expect(result.result).toBeDefined();
        expect(result.count).toBe(mockModelResult.length);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(true);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(2);
        expect(result.totalPages).toBe(mockModelResult.length);
      })
      .finally(done);
  });

  it("index == 2", (done) => {
    new Paginate(model).paginate({}, { page: 2, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toStrictEqual([{ id: 2 }]);
      expect(result?.hasNextPage).toBe(true);
      expect(result?.hasPrevPage).toBe(true);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(2);
      done();
    });
  });

  it("index == 2", (done) => {
    new Paginate(model)
      .paginate({}, { page: 2, limit: 1 })
      .then((result) => {
        expect(result.result).toStrictEqual([{ id: 2 }]);
        expect(result.hasNextPage).toBe(true);
        expect(result.hasPrevPage).toBe(true);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(2);
      })
      .finally(done);
  });

  it("page == totalPage", (done) => {
    Paginate.paginate(mockModel, {}, { page: 3, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toBeInstanceOf(Array);
      expect(result?.count).toBe(mockModelResult.length);
      expect(result?.hasNextPage).toBe(false);
      expect(result?.hasPrevPage).toBe(true);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(3);
      expect(result?.totalPages).toBe(mockModelResult.length);
      done();
    });
  });

  it("page == totalPage", (done) => {
    Paginate.paginate(mockModel, {}, { page: 3, limit: 1 })
      .then((result) => {
        expect(result.result).toBeDefined();
        expect(result.count).toBe(mockModelResult.length);
        expect(result.hasNextPage).toBe(false);
        expect(result.hasPrevPage).toBe(true);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(3);
        expect(result.totalPages).toBe(mockModelResult.length);
      })
      .finally(done);
  });

  it("page == totalPage", (done) => {
    Paginate.paginate(model, {}, { page: 3, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toStrictEqual([{ id: 3 }]);
      expect(result?.hasNextPage).toBe(false);
      expect(result?.hasPrevPage).toBe(true);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(3);
      done();
    });
  });

  it("page == totalPage", (done) => {
    new Paginate(model)
      .paginate({}, { page: 3, limit: 1 })
      .then((result) => {
        expect(result.result).toStrictEqual([{ id: 3 }]);
        expect(result.hasNextPage).toBe(false);
        expect(result.hasPrevPage).toBe(true);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(3);
      })
      .finally(done);
  });

  it("page == totalPage", (done) => {
    new Paginate(mockModel).paginate(
      {},
      { page: 3, limit: 1 },
      (error, result) => {
        expect(error).toBe(null);
        expect(result?.result).toBeInstanceOf(Array);
        expect(result?.count).toBe(mockModelResult.length);
        expect(result?.hasNextPage).toBe(false);
        expect(result?.hasPrevPage).toBe(true);
        expect(result?.limit).toBe(1);
        expect(result?.page).toBe(3);
        expect(result?.totalPages).toBe(mockModelResult.length);
        done();
      }
    );
  });

  it("page == totalPage", (done) => {
    new Paginate(mockModel)
      .paginate({}, { page: 3, limit: 1 })
      .then((result) => {
        expect(result.result).toBeDefined();
        expect(result.count).toBe(mockModelResult.length);
        expect(result.hasNextPage).toBe(false);
        expect(result.hasPrevPage).toBe(true);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(3);
        expect(result.totalPages).toBe(mockModelResult.length);
      })
      .finally(done);
  });

  it("page == totalPage", (done) => {
    new Paginate(model).paginate({}, { page: 3, limit: 1 }, (error, result) => {
      expect(error).toBe(null);
      expect(result?.result).toStrictEqual([{ id: 3 }]);
      expect(result?.hasNextPage).toBe(false);
      expect(result?.hasPrevPage).toBe(true);
      expect(result?.limit).toBe(1);
      expect(result?.page).toBe(3);
      done();
    });
  });

  it("page == totalPage", (done) => {
    new Paginate(model)
      .paginate({}, { page: 3, limit: 1 })
      .then((result) => {
        expect(result.result).toStrictEqual([{ id: 3 }]);
        expect(result.hasNextPage).toBe(false);
        expect(result.hasPrevPage).toBe(true);
        expect(result.limit).toBe(1);
        expect(result.page).toBe(3);
      })
      .finally(done);
  });

  // it("page > totalPage", (done) => {
  //   Paginate.paginate(model, {}, { page: 4, limit: 1 }, (error, result) => {
  //     expect(error).toBeInstanceOf(TotalPagesExceed);
  //     expect(result).toBe(undefined);
  //     done();
  //   });
  // });

  // it("page > totalPage", (done) => {
  //   Paginate.paginate(model, {}, { page: 4, limit: 1 })
  //     .then(
  //       (result) => {
  //         expect(result?.count).toBe(modelResult.length);
  //       },
  //       (error) => {
  //         expect(error).toBeInstanceOf(TotalPagesExceed);
  //       }
  //     )
  //     .finally(done);
  // });
});

import { Meta } from "../src/types";

describe("context tests", () => {
  it("basic ussage", async () => {
    const testCtx: Meta = {
      guildId: 123,
      roleId: 456,
    };
    const testParam = 5;

    const foo = async (param: number) => {
      const context = await import("../src/context");
      const ctx = context.get();
      expect(ctx).toEqual(expect.objectContaining(testCtx));
      return param * 2;
    };

    const context = await import("../src/context");
    context.with(testCtx, async () => {
      const result = await foo(testParam);
      expect(result).toBe(testParam * 2);
    });
  });
});

import { Meta } from "../src/types";

describe("context tests", () => {
  it("basic usage", async () => {
    const testCtx: Meta = {
      guildId: 123,
      roleId: 456,
    };
    const testParam = 5;

    const foo = async (param: number) => {
      const { default: context } = await import("../src/context");
      const ctx = context.get();
      expect(ctx).toEqual(expect.objectContaining(testCtx));
      return param * 2;
    };

    const { default: context } = await import("../src/context");
    context.with(testCtx, async () => {
      const result = await foo(testParam);
      expect(result).toBe(testParam * 2);
    });
  });

  it("extending context", async () => {
    const testCtx: Meta = {
      guildId: 123,
      roleId: 456,
    };
    const testCtx2: Meta = {
      userId: 62,
    };
    const testParam = 5;

    const foo = async (param: number) => {
      const { default: context } = await import("../src/context");
      const ctx = context.get();
      expect(ctx).toEqual(expect.objectContaining({ ...testCtx, ...testCtx2 }));
      return param * 2;
    };

    const { default: context } = await import("../src/context");
    context.with(testCtx, async () => {
      const { default: context2 } = await import("../src/context");
      context2.with(testCtx2, async () => {
        const result = await foo(testParam);
        expect(result).toBe(testParam * 2);
      });
    });
  });
});

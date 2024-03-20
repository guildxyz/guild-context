import { AsyncLocalStorage } from "async_hooks";
import { Meta, NoParamNoReturnFunc } from "./types";

const asyncLocalStorage = new AsyncLocalStorage<Meta>();

const withContext = (context: Meta, func: NoParamNoReturnFunc): void => {
  asyncLocalStorage.run(context, () => func());
};

const getContext = (): Meta => {
  return asyncLocalStorage.getStore() || {};
};

export default { with: withContext, get: getContext };

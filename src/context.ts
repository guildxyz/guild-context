import { AsyncLocalStorage } from "async_hooks";
import { Meta, NoParamNoReturnFunc } from "./types";

const asyncLocalStorage = new AsyncLocalStorage<Meta>();

const getContext = (): Meta => {
  return asyncLocalStorage.getStore() || {};
};

const withContext = (context: Meta, func: NoParamNoReturnFunc): void => {
  asyncLocalStorage.run({ ...getContext(), ...context }, () => func());
};

export default { with: withContext, get: getContext };

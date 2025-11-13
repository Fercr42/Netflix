export const combineLoadingStates = (...loadingStates: boolean[]): boolean => {
  return loadingStates.some((state) => state === true);
};

export const combineErrors = (...errors: (Error | null | undefined)[]): boolean => {
  return errors.some((error) => error !== null && error !== undefined);
};

export const getFirstError = (...errors: (Error | null | undefined)[]): Error | null => {
  return errors.find((error) => error !== null && error !== undefined) || null;
};


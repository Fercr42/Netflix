export const combineLoadingStates = (...loadingStates) => {
  return loadingStates.some((state) => state === true);
};

export const combineErrors = (...errors) => {
  return errors.some((error) => error !== null && error !== undefined);
};

export const getFirstError = (...errors) => {
  return errors.find((error) => error !== null && error !== undefined);
};

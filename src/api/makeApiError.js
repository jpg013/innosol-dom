export const makeApiError = (statusCode, statusText, msg) => {
  const err = new Error();
  err.statusCode = statusCode;
  err.statusText = statusText;
  err.msg = msg;
  return err;
};

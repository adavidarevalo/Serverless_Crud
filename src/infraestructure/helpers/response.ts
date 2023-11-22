/** @format */

export const responseHttp = (success: boolean = true, data: {} = null, message: string = null, statusCode = 200) => {
  return {
    statusCode,
    body: JSON.stringify({
      success,
      data,
      message,
    }),
  };
};

/** @format */
import { StatusCodes } from 'http-status-codes';

export const responseHttp = (
  success: boolean = true,
  data: {} = null,
  message: string = null,
  statusCode = StatusCodes.OK
) => {
  return {
    statusCode,
    body: JSON.stringify({
      success,
      data,
      message,
    }),
  };
};

/** @format */
import { handlerPath } from '@libs/handler-resolver';
import { updateUserSchema, userSchema } from './../../schema/user_schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.employeesActionsFn`,
  events: [
    {
      http: {
        method: 'get',
        path: 'employees',
      },
    },
    {
      http: {
        method: 'post',
        path: 'employees',
        request: {
          schemas: {
            'application/json': userSchema,
          },
        },
      },
    },
    {
      http: {
        method: 'put',
        path: 'employees/{id}',
        request: {
          schemas: {
            'application/json': updateUserSchema,
          },
        },
      },
    },
    {
      http: {
        method: 'delete',
        path: 'employees/{id}',
      },
    },
  ],
};

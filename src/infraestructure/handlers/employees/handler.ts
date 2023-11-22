/** @format */
import { middyfy } from '@libs/lambda';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getUserList } from 'src/application/controllers/employees';
import { responseHttp } from 'src/infraestructure/helpers/response';

const employeesActions = async (event: APIGatewayProxyEvent) => {
  const { httpMethod, path } = event;
  try {
    if (httpMethod === 'POST' && path === '/employees') {
      const userList = await getUserList();
      return responseHttp(true, {
        message: 'Create Lists',
      });
    }
    if (httpMethod === 'GET' && path === '/employees') {
      return responseHttp(true, {
        message: 'Get Lists',
      });
    }
  } catch (error) {}

  console.log('🚀 ~ file: employees.ts:7 ~ employeesActions ~ event:', event);
};

export const employeesActionsFn = middyfy(employeesActions);

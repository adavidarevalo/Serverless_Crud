/** @format */
import { middyfy } from '@libs/lambda';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { createUser, deleteUser, getUserList, updateUser } from 'src/application/controllers/employees';
import { responseHttp } from 'src/infraestructure/helpers/response';

const employeesActions = async (event: APIGatewayProxyEvent) => {
  const { httpMethod, path, body, pathParameters } = event;
  try {
    if (httpMethod === 'POST' && path === '/employees') {
      const newUser = await createUser(body as any);
      return responseHttp(true, newUser);
    }
    if (httpMethod === 'GET' && path === '/employees') {
      const userList = await getUserList();
      return responseHttp(true, userList);
    }
    if (httpMethod === 'DELETE' && pathParameters?.id) {
      const user = await deleteUser(pathParameters?.id);
      return responseHttp(true, user);
    }
    if (httpMethod === 'PUT' && pathParameters?.id) {
      const user = await updateUser(pathParameters?.id, body as any);
      return responseHttp(true, user);
    }
  } catch (error) {
    console.log(error);
    return responseHttp(false, null, error.message);
  }
};

export const employeesActionsFn = middyfy(employeesActions);

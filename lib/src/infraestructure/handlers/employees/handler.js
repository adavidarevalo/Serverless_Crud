import { middyfy } from '@libs/lambda';
import { getUserList } from 'src/application/controllers/employees';
import { responseHttp } from 'src/infraestructure/helpers/response';
const employeesActions = async (event) => {
    console.log('XXX');
    const { httpMethod, path, body } = event;
    try {
        if (httpMethod === 'POST' && path === '/employees') {
            console.log('🚀 ~ file: handler.ts:9 ~ employeesActions ~ body:', body);
            return responseHttp(true, {
                message: 'Create Lists',
            });
        }
        if (httpMethod === 'GET' && path === '/employees') {
            const userList = await getUserList();
            console.log('🚀 ~ file: handler.ts:20 ~ employeesActions ~ userList:', userList);
            return responseHttp(true, {
                message: 'Get Lists',
            });
        }
    }
    catch (error) {
        console.log(error);
        return responseHttp(false, null, error.message);
    }
};
export const employeesActionsFn = middyfy(employeesActions);
//# sourceMappingURL=handler.js.map
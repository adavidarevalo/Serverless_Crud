/** @format */

export const userSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', maxLength: 20 },
    lastName: { type: 'string', maxLength: 20 },
    birthDate: { type: 'string', format: 'date-time' },
    idType: { type: 'string', enum: ['cc', 'pas'] },
    id: { type: 'string' },
    salary: { type: 'number' },
  },
  required: ['firstName', 'birthDate', 'id', 'salary', 'idType'],
};

export const updateUserSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', maxLength: 20 },
    lastName: { type: 'string', maxLength: 20 },
    birthDate: { type: 'string', format: 'date-time' },
    idType: { type: 'string', enum: ['cc', 'pas'] },
    salary: { type: 'number' },
  },
  required: [],
};

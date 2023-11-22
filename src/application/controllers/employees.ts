/** @format */
import Database from '../connection/db';
import { IUser } from '../interface/user';
import { User } from '../model/user';

new Database();

export const getUserList = async () => {
  const users = await User.findAll();
  return users;
};

export const createUser = async (user: IUser) => {
  const newUser = await User.create({ ...user });
  return newUser;
};

export const deleteUser = async (id: string) => {
  const user = await User.destroy({ where: { id } });
  return user;
};

export const updateUser = async (id: string, user: IUser) => {
  const actualUser = await getUserById(id);
  if (!actualUser) throw new Error('User not found');

  const userToUpdate = {
    firstName: user.firstName || actualUser.firstName,
    lastName: user.lastName || actualUser.lastName,
    birthDate: user.birthDate || actualUser.birthDate,
    idType: user.idType || actualUser.idType,
    id: user.id || actualUser.id,
    salary: user.salary || actualUser.salary,
  };
  await User.update(userToUpdate, { where: { id } });
  return userToUpdate;
};

export const getUserById = async (id: string) => {
  const user = await User.findByPk(id);
  return user;
};

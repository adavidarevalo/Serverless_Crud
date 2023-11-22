/** @format */

export interface IUser {
  firstName: string;
  lastName?: string;
  birthDate: Date;
  idType: 'cc' | 'pas';
  id: string;
  salary: number;
}

/** @format */

import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'id',
  })
  id: number;

  @Column({
    type: DataType.STRING(20),
    field: 'firstName',
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING(20),
    field: 'lastName',
  })
  lastName?: string;

  @Column({
    type: DataType.STRING(20),
    field: 'birthDate',
    allowNull: false,
  })
  birthDate: string;

  @Column({
    type: DataType.STRING(2),
    field: 'idType',
  })
  idType: string;

  @Column({
    type: DataType.INTEGER(),
    field: 'salary',
  })
  salary: number;

  @Column({
    type: DataType.DATE(),
    field: 'createdAt',
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE(),
    field: 'updatedAt',
  })
  updatedAt: Date;
}

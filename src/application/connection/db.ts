/** @format */

import { Sequelize } from 'sequelize-typescript';
import { User } from '../model/user';

export type Dialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle';

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize({
      database: 'PRACTICE',
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_URL,
      dialect: process.env.DATABASE_DIALECT as Dialect,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      models: [User],
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the Database:', err);
      });
  }
}

export default Database;

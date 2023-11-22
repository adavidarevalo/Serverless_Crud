/** @format */

import { Sequelize } from 'sequelize-typescript';
import { User } from '../model/user';

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize({
      database: 'PRACTICE',
      username: 'admin',
      password: 'adminRoot',
      host: 'database-2.cedr0jraxxnt.us-east-1.rds.amazonaws.com',
      dialect: 'mysql',
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

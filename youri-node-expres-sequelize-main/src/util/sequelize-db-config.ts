import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
dotenv.config();

/**
 * @author Youri Janssen
 * @description This file is used to configure the sequelize connection to the database.
 */

const DB_NAME = process.env.DB_NAME!;
const DB_USER = process.env.DB_USER!;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD!;

export const sequelize: Sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "mysql",
  username: DB_USER,
  password: DB_USER_PASSWORD,
  storage: ":memory:",
  host: "localhost",
  models: [__dirname + "/models"],
});

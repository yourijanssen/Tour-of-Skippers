import { Table, Column, Model } from "sequelize-typescript";
import { AllowNull } from "sequelize-typescript/dist/model/column/column-options/allow-null";

/**
 * @author Youri Janssen
 * @description This class represents the skipper table in the database.
 * @framework Sequelize-typescript
 */

@Table
export class Skipper extends Model {
  @AllowNull(false)
  @Column
  naam!: string;

  @AllowNull(false)
  @Column
  top!: boolean;
}

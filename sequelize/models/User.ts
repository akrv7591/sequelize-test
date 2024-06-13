import {Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import {ICUser, IUser} from "../interfaces";


@Table({
  modelName: "User",
  tableName: "user",
  underscored: true
})
export class User extends Model<IUser, ICUser> {
  @PrimaryKey
  @Column({
    type: "binary(16)",
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  name: string
}

import { Model } from "sequelize-typescript";
import { ICUser, IUser } from "../interfaces";
export declare class User extends Model<IUser, ICUser> {
    id: number;
    name: string;
}

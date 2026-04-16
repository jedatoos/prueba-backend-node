import { DataSource } from "typeorm";
import { UserEntity } from "../entities/User.entity";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true, 
    logging: false,
    entities: [UserEntity],
});
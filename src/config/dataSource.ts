import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import PetEntity from "../entities/PetEntity";
import AdopterEntity from "../entities/AdopterEntity";
import AdressEntity from "../entities/address";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite", // Path to SQL database archive
  synchronize: true,
  logging: false,
  entities: [PetEntity, AdopterEntity, AdressEntity], // All aplications entities must be inserted here
  migrations: [],
  subscribers: [],
});
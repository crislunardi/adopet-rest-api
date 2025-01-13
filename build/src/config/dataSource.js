"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var PetEntity_1 = __importDefault(require("../entities/PetEntity"));
var AdopterEntity_1 = __importDefault(require("../entities/AdopterEntity"));
var address_1 = __importDefault(require("../entities/address"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [PetEntity_1.default, AdopterEntity_1.default, address_1.default],
    migrations: [],
    subscribers: [],
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// PetRouter.ts
var express_1 = __importDefault(require("express"));
var PetController_1 = __importDefault(require("../controller/PetController"));
var PetRepository_1 = __importDefault(require("../repositories/PetRepository"));
var dataSource_1 = require("../config/dataSource");
var router = express_1.default.Router();
var petRepository = new PetRepository_1.default(dataSource_1.AppDataSource.getRepository("PetEntity"));
var petController = new PetController_1.default(petRepository);
router.post("/", function (req, res, next) { return petController.createPet(req, res, next); });
router.get("/", function (req, res, next) { return petController.listPets(req, res, next); });
router.put("/:id", function (req, res, next) { return petController.updatePet(req, res, next); });
router.delete("/:id", function (req, res, next) { return petController.deletePet(req, res, next); });
exports.default = router;

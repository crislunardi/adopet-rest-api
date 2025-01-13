"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var adontanteController_1 = __importDefault(require("../controller/adontanteController"));
var adotanteRepository_1 = __importDefault(require("../repositories/adotanteRepository"));
var dataSource_1 = require("../config/dataSource");
var router = express_1.default.Router();
var adotanteRepository = new adotanteRepository_1.default(dataSource_1.AppDataSource.getRepository("AdotanteEntity"));
var adontanteController = new adontanteController_1.default(adotanteRepository);
router.post("/", function (req, res, next) { return adontanteController.criaAdotante(req, res, next); });
exports.default = router;

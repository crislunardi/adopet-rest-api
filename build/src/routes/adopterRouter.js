"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AdopterController_1 = __importDefault(require("../controller/AdopterController"));
var AdopterRepository_1 = __importDefault(require("../repositories/AdopterRepository"));
var dataSource_1 = require("../config/dataSource");
var router = express_1.default.Router();
var adopterRepository = new AdopterRepository_1.default(dataSource_1.AppDataSource.getRepository("AdopterEntity"));
var adopterController = new AdopterController_1.default(adopterRepository);
router.post("/", function (req, res, next) { return adopterController.createAdopter(req, res, next); });
router.get("/", function (req, res, next) { return adopterController.listAdopters(req, res, next); });
router.put("/:id", function (req, res, next) { return adopterController.updateAdopter(req, res, next); });
router.delete("/:id", function (req, res, next) { return adopterController.deleteAdopter(req, res, next); });
router.patch("/:id", function (req, res, next) { return adopterController.updateAdopterAddress(req, res, next); });
exports.default = router;

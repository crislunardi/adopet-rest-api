import express from "express";
import AdopterController from "../controller/AdopterController";
import AdopterRepository from "../repositories/AdopterRepository";
import { AppDataSource } from "../config/dataSource";

const router = express.Router();
const adopterRepository = new AdopterRepository(
    AppDataSource.getRepository("AdopterEntity")
);
const adopterController = new AdopterController(adopterRepository);

router.post("/", (req, res, next) => adopterController.createAdopter(req, res, next));
router.get("/", (req, res, next) => adopterController.listAdopters(req, res, next));
router.put("/:id", (req, res, next) => adopterController.updateAdopter(req, res, next));
router.delete("/:id", (req, res, next) => adopterController.deleteAdopter(req, res, next));
router.patch("/:id", (req, res, next) => adopterController.updateAdopterAddress(req, res, next));

export default router;
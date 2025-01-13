// PetRouter.ts
import express from "express";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
import { AppDataSource } from "../config/dataSource";

const router = express.Router();
const petRepository = new PetRepository(AppDataSource.getRepository("PetEntity"));
const petController = new PetController(petRepository);


router.post("/", (req, res, next) => petController.createPet(req, res, next));
router.get("/", (req, res, next) => petController.listPets(req, res, next));
router.put("/:id", (req, res, next) => petController.updatePet(req, res, next));
router.delete("/:id", (req, res, next) => petController.deletePet(req, res, next));

export default router;

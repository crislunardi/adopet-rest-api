import { Request, Response, NextFunction } from "express";
import type TipoPet from "../tipos/TipoPet";
import Enumspecie from "../enum/EnumSpecie";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";

export default class PetController {
    constructor(private repository: PetRepository) {}

    async createPet(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { adopted, specie, birthDate, name } = req.body;

            if (!adopted && adopted !== false || !specie || !birthDate || !name) {
                res.status(400).json({ error: "'All' fields are required." });
                return;
            }

            if (!Object.values(Enumspecie).includes(specie)) {
                res.status(400).json({ error: "Only 'dog' or 'cat' is accepted as a species." });
                return;
            }

            const newPet = new PetEntity(name, specie, birthDate, adopted);
            await this.repository.createPet(newPet);
            res.status(201).json(newPet);
        } catch (error) {
            next(error);
        }
    }

    async listPets(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const listOfPets = await this.repository.listPet();
            res.status(200).json(listOfPets);
        } catch (error) {
            next(error); 
        }
    }

    async updatePet(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const { success, message } = await this.repository.updatePet(
                Number(id),
                req.body as PetEntity
            );

            if (!success) {
                res.status(404).json({ error: message });
                return;
            }

            res.sendStatus(204);
        } catch (error) {
            next(error); 
        }
    }

    async deletePet(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const { success, message } = await this.repository.deletePet(Number(id));

            if (!success) {
                res.status(404).json({ error: message });
                return;
            }

            res.sendStatus(204);
        } catch (error) {
            next(error); 
        }
    }
}

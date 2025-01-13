import { Request, Response, NextFunction } from "express";
import AdopterRepository from "../repositories/AdopterRepository";
import AdopterEntity from "../entities/AdopterEntity";
import AdressEntity from "../entities/address";

export default class AdopterController {
    constructor(private repository: AdopterRepository) { }

    async createAdopter(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name, password, phone, photo, address } = req.body;

            if (!name || !password || !phone || !address || !address.city || !address.state) {
                res.status(400).json({ message: "Missing required fields" });
                return;
            }

            const newAddress = new AdressEntity(address.city, address.state);
            const novoAdopter = new AdopterEntity(name, password, phone, address, photo);

            await this.repository.createAdopter(novoAdopter);
            res.status(201).json(novoAdopter);
        } catch (error) {
            next(error);
        }
    };


    async updateAdopter(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) {
                res.status(400).json({ error: 'Invalid ID' });
                return;
            }

            const { success, message } = await this.repository.updateAdopter(
                Number(id),
                req.body as AdopterEntity
            );

            if (!success) {
                res.status(404).json({ error: message });
                return;
            }

            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    };


    async listAdopters(req: Request, res: Response, next: NextFunction): Promise<void> {
        const listOfAdopters = await this.repository.listAdopters();
        res.json(listOfAdopters);
        return;
    };

    async deleteAdopter(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) {
                res.status(400).json({ error: 'Invalid ID' });
                return;
            }
            const { success, message } = await this.repository.deleteAdopter(Number(id));

            if (!success) {
                res.status(404).json({ error: message });
                return;
            }

            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    };


    async updateAdopterAddress(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
    
            if (!id || isNaN(Number(id))) {
                res.status(400).json({ error: 'Invalid ID' });
                return;
            }
    
            const { success, message } = await this.repository.updateAdopterAddress(
                Number(id), req.body as AdressEntity
            );
    
            if (!success) {
                res.status(404).json({ error: message });
                return;
            }
    
            res.sendStatus(204);
            return;
        } catch (error) {
            next(error);
        }
    }
    
};
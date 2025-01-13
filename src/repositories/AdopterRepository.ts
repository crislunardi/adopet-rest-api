import { Repository } from "typeorm";
import AdopterEntity from "../entities/AdopterEntity";
import interfaceAdopterRepository from "./interfaces/InterfaceAdopterRepository";
import AdressEntity from "../entities/address";


export default class AdopterRepository implements interfaceAdopterRepository {
    private repository: Repository<AdopterEntity>;

    constructor(repository: Repository<AdopterEntity>) {
        this.repository = repository;
    };

    async createAdopter(adopter: AdopterEntity): Promise<void> {
        await this.repository.save(adopter);
    };

    async listAdopters(): Promise<AdopterEntity[]> {
        return await this.repository.find();
    };

    async updateAdopter(
        id: number,
        newData: AdopterEntity
    ): Promise<{ success: boolean, message?: string }> {
        try {
            const adopterToUpdate = await this.repository.findOne({ where: { id } });

            if (!adopterToUpdate) {
                return { success: false, message: "Adopter not found" };
            }

            Object.assign(adopterToUpdate, newData);
            await this.repository.save(adopterToUpdate);
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: "Error updating adopter"
            }
        }
    };

    async deleteAdopter(
        id: number ): Promise<{ success: boolean, message?: string }> {
        try {
            const adopterToRemove = await this.repository.findOne({ where: { id } });

            if (!adopterToRemove) {
                return { success: false, message: "Adopter not found" };
            }

            await this.repository.remove(adopterToRemove);
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: "Error deleting adopter"
            }
        }
    };

    async updateAdopterAddress(
        adopterId: number,
        address: AdressEntity
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const adopter = await this.repository.findOne({ where: { id: adopterId } });
    
            if (!adopter) {
                return { success: false, message: "Adopter not found" };
            }
    
            const newAdress = new AdressEntity(address.city, address.state);
            adopter.address = newAdress;
            await this.repository.save(adopter);

            return { success: true, message: "Address updated successfully" };
        } catch (error) {
            return {
                success: false,
                message: "Error updating adopter address"
            };
        }
    }
    
};
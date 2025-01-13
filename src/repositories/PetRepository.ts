import { Repository } from "typeorm";
import PetEntity from "../entities/PetEntity";
import interfacePetRepository from "./interfaces/InterfacePetRepository";

export default class PetRepository implements interfacePetRepository {
    private repository: Repository<PetEntity>;

    constructor(repository: Repository<PetEntity>) {
        this.repository = repository;
    }
    createPet(pet: PetEntity): void {
        this.repository.save(pet);
    }
    async listPet(): Promise<PetEntity[]> {
       return await this.repository.find();
    }
    async updatePet(
        id: number, 
        newData: PetEntity,
    ): Promise <{ success: boolean; message?: string }> {
        try {
            const petToUpdate = await this.repository.findOne({ where: { id } });
            
            if (!petToUpdate) {
                return { success: false, message: "Pet not found" };
            }

            Object.assign(petToUpdate, newData);

            await this.repository.save(petToUpdate);

            return { success: true };

        } catch (error) {
            console.log(error);
            return { 
                success: false, 
                message: "Error updating pet" 
            };
        }
    }
    async deletePet(id: number): Promise<{ success: boolean; message?: string}> {
        try {
            const petToRemove = await this.repository.findOne({ where: { id } });

            if (!petToRemove) {
                return { success: false, message: "Pet not found" };
            }
            
            await this.repository.remove(petToRemove);

            return { success: true };

        } catch (error) {
            console.log(error);
            return { success: false, message: "Error updating pet" };
        }
    }
}
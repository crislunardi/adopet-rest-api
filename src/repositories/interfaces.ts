import PetEntity from "../entities/PetEntity";

export default interface interfacePetRepository {
    createPet(pet: PetEntity): void;
    listPet(): Array<PetEntity>;
    updatePet(id: number, pet: PetEntity): void;
    deletePet(id: number, pet: PetEntity): void;
}
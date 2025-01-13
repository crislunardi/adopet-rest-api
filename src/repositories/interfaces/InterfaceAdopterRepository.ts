import AdressEntity from "../../entities/address";
import AdopterEntity from "../../entities/AdopterEntity"

export default interface interfaceAdopterRepository {
    createAdopter(adopter: AdopterEntity): void | Promise<void>;

    listAdopters(): AdopterEntity[] | Promise<AdopterEntity[]> | void;

    updateAdopter(
        id: number,
        adopter: AdopterEntity
    ): Promise<{ success: boolean; message?: string }> | void;

    deleteAdopter(
        id: number
    ): Promise<{ success: boolean; message?: string }> | void;

    updateAdopterAddress(
        adopterId: number,
        address: AdressEntity
    ): Promise <{ success: boolean; message?: string }> | void;
}
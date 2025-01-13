import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Enumspecie from "../enum/EnumSpecie";

@Entity()
export default class PetEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column()
    specie: Enumspecie;

    @Column()
    birthDate: Date;
    
    @Column()
    adopted: boolean;

    constructor(
        name: string,
        specie: Enumspecie,
        birthDate: Date,
        adopted: boolean = false
    ) {
        this.name = name;
        this.specie = specie;
        this.birthDate = birthDate;
        this.adopted = adopted;
    }
};
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import AdressEntity from "./address";
  
  @Entity()
  export default class AdopterEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    photo?: string;
    
    @OneToOne(() => AdressEntity, { nullable: true, cascade: true, eager: true })
    @JoinColumn()
    address?: AdressEntity;
  
    constructor(
      name: string,
      password: string,
      phone: string,
      photo?: string,
      address?: AdressEntity
    ) {
      this.name = name;
      this.password = password;
      this.photo = photo;
      this.phone = phone;
      this.address = address;
    }
  }
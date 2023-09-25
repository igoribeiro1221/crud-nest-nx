import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ProductEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 120})
    name:string;

    @Column({type: 'int4'})
    quantity:number;

    @Column({type: 'float'})
    price:number;
}

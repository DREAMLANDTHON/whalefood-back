import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { defaultColumn } from './common/default-columns';
import { AgeType, GenderType, SexPrefType } from '../../type';

@Entity()
export class User extends defaultColumn{

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    gender: GenderType | null;

    @Column()
    age: AgeType| null;

    @Column()
    sexpref: SexPrefType|null;
}
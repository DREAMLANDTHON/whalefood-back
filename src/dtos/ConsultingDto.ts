import { IsNotEmpty, IsString, IsEmail, IsNumber } from "class-validator";
import { AgeType, GenderType, SexPrefType } from "../../type";

export class CreateConsultingDto{
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsNotEmpty()
    @IsString()
    public content: string;
}


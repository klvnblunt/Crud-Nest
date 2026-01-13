import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { CreateRecadosDto } from "./create-recados.dto";

export class UpdateRecadosDto extends PartialType(CreateRecadosDto){

}

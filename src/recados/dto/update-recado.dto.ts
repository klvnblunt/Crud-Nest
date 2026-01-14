import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsOptional } from "class-validator";
import { CreateRecadosDto } from "./create-recados.dto";

export class UpdateRecadosDto extends PartialType(CreateRecadosDto){
    @IsBoolean()
    @IsOptional()
    readonly lido?: boolean
}

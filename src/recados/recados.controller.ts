import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadosDto } from './dto/create-recados.dto';
import { UpdateRecadosDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(201)
  @Get()
  findAll(@Query() pagination: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { limit = 10, offset = 0 } = pagination;
    //return `Essa rota retorna todos os recados. Limite = ${limit}, OffSet = ${offset}`;
    return this.recadosService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(id)
  }

  @Post()
  create(@Body() createRecadoDto: CreateRecadosDto) {
    return this.recadosService.create(createRecadoDto)
  }

  @Put()
  updateAll() {}

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() updateRecadoDto: UpdateRecadosDto) {
    return this.recadosService.updateOne(id, updateRecadoDto)

  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id)
  }
}

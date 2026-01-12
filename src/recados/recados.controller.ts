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
  create(@Body() body: object) {
    return this.recadosService.create(body)
  }

  @Put()
  updateAll() {}

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() body: object) {
    return this.recadosService.updateOne(id, body)

  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id)
  }
}

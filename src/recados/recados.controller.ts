import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

    @HttpCode(201)
    @Get()
    findAll(@Query()pagination: any){
        const{ limit = 10, offset = 0} = pagination
        return `Essa rota retorna todos os recados. Limite = ${limit}, OffSet = ${offset}`
    }

 
    @Get(':id')
    findOne(@Param('id') id: any){

        return `Essa rota retorna o recado ${id}`
    }

    @Post()
    create(@Body() body: any){
        console.log(body)
        return body
    }

    @Put()
    updateAll(){

    }

    @Patch(':id')
    updateOne(@Param('id') id:string, @Body() body:any){
        return {
            id,
            ...body
        }
    }

    @Delete(':id')
    remove(@Param('id') id:string){ 
        return `Essa rota Apaga o recado ID ${id}`
    }
}

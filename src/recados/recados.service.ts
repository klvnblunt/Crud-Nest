import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';
import { CreateRecadosDto } from './dto/create-recados.dto';
import { UpdateRecadosDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecadosService {

    constructor(
        @InjectRepository(RecadoEntity)
        private readonly recadoRepository: Repository<RecadoEntity>
        
    ){}

    async findAll(){
        const recados = await this.recadoRepository.find();
        return recados
    }

    async findOne(id: number){
        //const recado = this.recados.find(item => item.id === +id)
        const recado = await this.recadoRepository.findOne({
            where: {
                id,
            }
        })
        if (recado) return recado;

        throw new HttpException("Recado não encontrado", HttpStatus.NOT_FOUND)
    }

    async create(createRecadoDto: CreateRecadosDto){
        
        const newRecado = {
            ...createRecadoDto,
            lido: false,
            data: new Date()
        };
        
        const recado = await this.recadoRepository.create(newRecado)

        return this.recadoRepository.save(recado)
    }

    async updateOne(id: number, updateRecadoDto: UpdateRecadosDto){

        const partialUpdateRecadoDto ={
            lido: updateRecadoDto?.lido,
            texto: updateRecadoDto?.texto
        }
        const recado = await this.recadoRepository.preload({
            id,
            ... partialUpdateRecadoDto
        })

        if (recado) return this.recadoRepository.save(recado);

        throw new HttpException("Recado não encontrado", HttpStatus.NOT_FOUND)
    }

    async remove(id: number){
        const recado = await this.recadoRepository.findOneBy({
            id,
        })

        if (recado) return this.recadoRepository.remove(recado);

        throw new HttpException("Recado não encontrado", HttpStatus.NOT_FOUND)
    }
}

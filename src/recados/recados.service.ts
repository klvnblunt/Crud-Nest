import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';
import { CreateRecadosDto } from './dto/create-recados.dto';
import { UpdateRecadosDto } from './dto/update-recado.dto';

@Injectable()
export class RecadosService {
    private lastId=1;
    private recados: RecadoEntity[] = [
        {
            id: 1,
            texto: 'Recado de teste',
            de: 'João',
            para: 'José',
            lido: false,
            data: new Date(),
        }
    ]

    findAll(){
        return this.recados
    }

    findOne(id: string){
        const recado = this.recados.find(item => item.id === +id)

        if (recado) return recado;

        throw new HttpException("Recado não encontrado", HttpStatus.NOT_FOUND)
    }

    create(createRecadoDto: CreateRecadosDto){
        this.lastId++;
        const id = this.lastId;
        const newRecado = {
            id,
            ...createRecadoDto,
            lido: false,
            data: new Date()
        };
        this.recados.push(newRecado);

        return newRecado;
    }

    updateOne(id: string, updateRecadoDto: UpdateRecadosDto){
        const recadoExistenteIndex = this.recados.findIndex(item => item.id === +id)

        if(recadoExistenteIndex < 0 ){
            throw new NotFoundException("Recado inexistente!")
        }

       
        const recadoExistente = this.recados[recadoExistenteIndex]

        this.recados[recadoExistenteIndex] = {
             ...recadoExistente,
            ...updateRecadoDto,
        }

        return this.recados[recadoExistenteIndex]
    }

    remove(id: string){
        const recadoExistenteIndex = this.recados.findIndex(item => item.id === +id)

        if(recadoExistenteIndex < 0 ){
            throw new NotFoundException("Recado inexistente!")
        }

        const recado = this.recados[recadoExistenteIndex]
        this.recados.splice(recadoExistenteIndex, 1)
        return recado
    }
}

import { Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from './entities/pessoa.entity'



@Injectable()
export class PessoasService {

  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>
  ){}

  async create(createPessoaDto: CreatePessoaDto) {

    try {
      const perssoaData = {
      email: createPessoaDto.email,
      passwordHash: createPessoaDto.password,
      name: createPessoaDto.name,
    }

    const novaPessoa = this.pessoaRepository.create(perssoaData);
    await this.pessoaRepository.save(perssoaData);
    return novaPessoa;

    } catch (error){
      if(error.code === '23505'){
        throw new ConflictException('E-mail já cadastrado')
      }
      throw error;
    }

    
  }

  async findAll() {
    const pessoas = await this.pessoaRepository.find();
    return pessoas
  }

  async findOne(id: number) {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
      }
    })
    if(pessoa) return pessoa

    throw new HttpException("Pessoa não encontrado", HttpStatus.NOT_FOUND)
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const dadosPessoa = {
      name: updatePessoaDto?.name,
      passwordHash: updatePessoaDto?.password
    }

    const pessoa = await this.pessoaRepository.preload({
      id,
      ...dadosPessoa,
    });

    if(!pessoa) {
      throw new HttpException("Recado não encontrado", HttpStatus.NOT_FOUND)
    }

    return this.pessoaRepository.save(pessoa)
  }

  async remove(id: number) {
    const pessoa = await this.pessoaRepository.findOneBy({
      id,
    })

    if (pessoa) return this.pessoaRepository.remove(pessoa)

    throw new HttpException("Recado não encontrado", HttpStatus.NOT_FOUND)
  }
}

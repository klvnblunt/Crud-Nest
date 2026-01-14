import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from 'src/pessoas/pessoas.module';

@Module({
  imports: [RecadosModule, PessoasModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'nestuser',
    database: 'nestdb',
    password: '123456',
    autoLoadEntities: true,
    synchronize: true


  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

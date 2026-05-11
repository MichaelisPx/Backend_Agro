import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidenciaModule } from './incidencia/incidencia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'backend_agro',
      autoLoadEntities: true,
      synchronize: true,
    }),
    IncidenciaModule,
  ],
})
export class AppModule {}


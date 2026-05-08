import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CosechaModule } from './cosecha/cosecha.module';

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

    CosechaModule,
  ],
})
export class AppModule {}
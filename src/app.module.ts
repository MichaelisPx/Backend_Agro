import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CultivoRealModule } from './cultivo-real/cultivo-real.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',

      host: 'localhost',

      port: 3306,

      username: 'root',

      password: '',

      database: 'cultivos',

      autoLoadEntities: true,

      synchronize: true,
    }),

    CultivoRealModule,
  ],
})
export class AppModule {}
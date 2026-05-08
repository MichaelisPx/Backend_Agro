import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CultivoRealService } from './cultivo-real.service';
import { CultivoRealController } from './cultivo-real.controller';

import { CultivoReal } from './entities/cultivo-real.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CultivoReal]),
  ],

  controllers: [CultivoRealController],

  providers: [CultivoRealService],
})
export class CultivoRealModule {}
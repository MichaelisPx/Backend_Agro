import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CultivoReal } from './entities/cultivo-real.entity';

import { CreateCultivoRealDto } from './dto/create-cultivo-real.dto';
import { UpdateCultivoRealDto } from './dto/update-cultivo-real.dto';

@Injectable()
export class CultivoRealService {

  constructor(
    @InjectRepository(CultivoReal)
    private cultivoRealRepository: Repository<CultivoReal>,
  ) {}

  create(createCultivoRealDto: CreateCultivoRealDto) {
    const nuevoCultivo =
      this.cultivoRealRepository.create(createCultivoRealDto);

    return this.cultivoRealRepository.save(nuevoCultivo);
  }

  findAll() {
    return this.cultivoRealRepository.find();
  }

  findOne(id: number) {
    return this.cultivoRealRepository.findOne({
      where: {
        id_cultivo_real: id,
      },
    });
  }

  async update(
    id: number,
    updateCultivoRealDto: UpdateCultivoRealDto,
  ) {

    await this.cultivoRealRepository.update(
      id,
      updateCultivoRealDto,
    );

    return this.findOne(id);
  }

  async remove(id: number) {
    return this.cultivoRealRepository.delete(id);
  }
}
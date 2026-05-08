import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cosecha } from './entities/cosecha.entity';
import { CreateCosechaDto } from './dto/create-cosecha.dto';
import { UpdateCosechaDto } from './dto/update-cosecha.dto';

@Injectable()
export class CosechaService {
  constructor(
    @InjectRepository(Cosecha)
    private cosechaRepository: Repository<Cosecha>,
  ) {}

  create(createCosechaDto: CreateCosechaDto) {
    const nuevaCosecha =
      this.cosechaRepository.create(createCosechaDto);

    return this.cosechaRepository.save(nuevaCosecha);
  }

  findAll() {
    return this.cosechaRepository.find();
  }

  findOne(id: number) {
    return this.cosechaRepository.findOneBy({
      id_cosecha: id,
    });
  }

  async update(
    id: number,
    updateCosechaDto: UpdateCosechaDto,
  ) {
    await this.cosechaRepository.update(
      id,
      updateCosechaDto,
    );

    return this.findOne(id);
  }

  remove(id: number) {
    return this.cosechaRepository.delete(id);
  }
}
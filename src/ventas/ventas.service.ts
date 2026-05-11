import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private ventaRepository: Repository<Venta>,
  ) {}

  create(data: Partial<Venta>) {
    const venta = this.ventaRepository.create(data);
    return this.ventaRepository.save(venta);
  }

  findAll() {
    return this.ventaRepository.find();
  }
}

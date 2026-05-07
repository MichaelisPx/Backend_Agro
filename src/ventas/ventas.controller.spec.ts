import { Test, TestingModule } from '@nestjs/testing';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';
import { ManyToOne, JoinColumn } from 'typeorm';
import { Cosecha } from '../../cosechas/entities/cosecha.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Cosecha } from '../../cosechas/entities/cosecha.entity';

describe('VentasController', () => {
  let controller: VentasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentasController],
      providers: [VentasService],
    }).compile();

    controller = module.get<VentasController>(VentasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

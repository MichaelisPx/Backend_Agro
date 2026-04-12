import { Controller, Get, Post, Body } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { Venta } from './entities/venta.entity';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  create(@Body() data: Venta) {
    return this.ventasService.create(data);
  }

  @Get()
  findAll() {
    return this.ventasService.findAll();
  }
}

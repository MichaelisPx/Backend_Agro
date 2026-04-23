import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ventas' })
export class Venta {

  @PrimaryGeneratedColumn({ name: 'id_venta' })
  id_venta!: number;

  @Column({ name: 'id_cosecha', type: 'integer' })
  id_cosecha!: number;

  // ❗ SQLite NO usa timestamp → usamos datetime
  @Column({ name: 'fecha_venta', type: 'datetime' })
  fecha_venta!: Date;

  @Column({ name: 'cantidad_vendida', type: 'integer' })
  cantidad_vendida!: number;

  @Column({ name: 'precio_unitario', type: 'real' })
  precio_unitario!: number;

  @Column({ name: 'ingreso_total', type: 'real' })
  ingreso_total!: number;

  @Column({ name: 'forma_pago', type: 'text' })
  forma_pago!: string;

  @Column({ name: 'estado_pago', type: 'text' })
  estado_pago!: string;
}

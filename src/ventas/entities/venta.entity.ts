import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ventas' })
export class Venta {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  producto!: string;

  @Column({ type: 'int' })
  cantidad!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio!: number;

  @Column({ type: 'timestamp' })
  fecha!: Date;
}

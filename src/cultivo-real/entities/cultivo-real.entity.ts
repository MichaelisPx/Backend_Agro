import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { OneToMany } from 'typeorm';
// import { Cosecha } from '../cosechas/cosecha.entity';
// import { Reporte } from '../reportes/reporte.entity';
// import { Incidencia } from '../incidencias/incidencia.entity';

@Entity('cultivo_real')
export class CultivoReal {
  @PrimaryGeneratedColumn()
  id_cultivo_real!: number;

  @Column()
  id_cultivo_base!: number;

  @Column({ type: 'date' })
  fecha_inicio!: string;

  @Column()
  tamano_lote!: string;

  @Column()
  estado!: string;

  @Column()
  id_usuario_responsable!: number;

  // UN CULTIVO REAL
  // TIENE MUCHAS COSECHAS
  // @OneToMany(() => Cosecha, (cosecha) => cosecha.cultivo_real)
  // cosechas!: Cosecha[];

  // UN CULTIVO REAL
  // TIENE MUCHOS REPORTES
  // @OneToMany(() => Reporte, (reporte) => reporte.cultivo_real)
  // reportes!: Reporte[];

  // UN CULTIVO REAL
  // TIENE MUCHAS INCIDENCIAS
  // @OneToMany(() => Incidencia, (incidencia) => incidencia.cultivo_real)
  // incidencias!: Incidencia[];
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  // =========================
  // RELACIONES DEL DIAGRAMAaa
  // =========================

  // cultivo_real -> reportes
  // Un cultivo_real puede tener muchos reportes
  // RELACION: OneToMany

  // cultivo_real -> cosechas
  // Un cultivo_real puede tener muchas cosechas
  // RELACION: OneToMany

  // cultivo_real -> incidencias
  // Un cultivo_real puede tener muchas incidencias
  // RELACION: OneToMany

}
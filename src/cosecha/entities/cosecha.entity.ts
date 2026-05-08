import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';



@Entity('cosecha')
export class Cosecha {

  @PrimaryGeneratedColumn()
  id_cosecha!: number;

  @Column()
  fecha_cosecha!: string;

  @Column('decimal')
  cantidad_cosechada!: number;

  @Column()
  unidad_medida!: string;

  @Column()
  tipo_cosecha!: string;

  @Column({
    nullable: true,
  })
  observaciones?: string;
}
   // MUCHAS COSECHAS PERTENECEN A UN CULTIVO

 /* @ManyToOne(
    () => CultivoReal,
    (cultivo_real) => cultivo_real.cosechas,
  )
  @JoinColumn({
    name: 'id_cultivo_real',
  })
  cultivo_real!: CultivoReal;

  // MUCHAS COSECHAS PERTENECEN A UN USUARIO

  ManyToOne(
    () => Usuario,
    (usuario) => usuario.cosechas,
  )
  @JoinColumn({
    name: 'id_usuario_registra',
  })
  usuario!: Usuario;

  // UNA COSECHA TIENE MUCHAS VENTAS

  @OneToMany(
    () => Venta,
    (venta) => venta.cosecha,
  )
  ventas!: Venta[];

  // UNA COSECHA TIENE MUCHOS REPORTES

  @OneToMany(
    () => Reporte,
    (reporte) => reporte.cosecha,
  )
  reportes!: Reporte[];
*/

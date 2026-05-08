export class CreateCosechaDto {

  id_cultivo_real!: number;

  id_usuario_registra!: number;

  fecha_cosecha!: string;

  cantidad_cosechada!: number;

  unidad_medida!: string;

  tipo_cosecha!: string;

  observaciones?: string;
}
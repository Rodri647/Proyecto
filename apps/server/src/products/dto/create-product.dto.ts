import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  nombre: string;

  @IsNumber()
  precio: number;

  @IsString()
  descripcion: string;

  @IsNumber()
  stock: number;

  @IsArray()
  @IsOptional()
  caracteristicas?: { clave: string; valor: string }[];

  @IsOptional()
  imagen?: string; // Aquí se almacena el nombre de la imagen
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Live {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}

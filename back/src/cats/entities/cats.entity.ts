import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthdate: Date;

  @Column()
  race: string;

  @Column()
  gender: string;

  @Column()
  city: string;

  @Column()
  description: string;

  @Column()
  photo: string;

  @Column()
  adoptionStatus: string;
}

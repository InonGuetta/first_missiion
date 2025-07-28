// זה הסכמה של הטבלת db 
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('user')
export default class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  username: string;

  @Column()
  password: string;
}
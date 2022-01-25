import { CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Game } from "../../games/entities/Game";

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => Game, (game) => game.order)
  games: Game[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
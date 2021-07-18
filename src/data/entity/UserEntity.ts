import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
export class UserEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

    constructor() {
      if (!this.id) {
        this.id = v4();
      }
    }
}

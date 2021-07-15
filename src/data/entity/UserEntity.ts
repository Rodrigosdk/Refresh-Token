import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
export class UserEntity {
    @PrimaryColumn()
    id: String;

    @Column()
    name: String;

    @PrimaryColumn()
    username: String;

    @Column()
    password: String;

    constructor() {
      if (!this.id) {
        this.id = v4();
      }
    }
}

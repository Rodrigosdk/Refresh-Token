/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1626387407299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'username',
          type: 'varchar',
          isPrimary: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

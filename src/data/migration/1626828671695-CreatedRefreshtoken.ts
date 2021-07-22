/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatedRefreshtoken1626828671695 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'refreshtoken',
      columns: [
        {
          name: 'id',
          type: 'uuid',
        },
        {
          name: 'expiresIn',
          type: 'int',
        },
        {
          name: 'user_id',
          type: 'uuid',
        },
      ],
      foreignKeys: [
        {
          name: 'FKUser',
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          columnNames: ['user_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('refreshtoken');
  }
}

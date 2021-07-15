import { Repository, EntityRepository } from 'typeorm';
import { UserEntity } from '../entity/UserEntity';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {

}

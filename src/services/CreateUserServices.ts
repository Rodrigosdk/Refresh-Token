/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import UserEntity from '../data/repository/UsersServices';

interface IUserRequest {
    name: string;
    password: string;
    username: string;
}

export class CreateUserServices {
  public async execute({ name, password, username }: IUserRequest) {
    const repository = getCustomRepository(UserEntity);
    const userAlreadyExists = await repository.findOne({ username });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = repository.create({ name, password: passwordHash, username });
    await repository.save(user);

    return user;
  }
}

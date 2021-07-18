/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import 'dotenv';

import UserEntity from '../data/repository/UsersServices';

interface IUserRequest {
    password: string;
    username: string;
}

export class AuthenticationUserServices {
  public async execute({ password, username }: IUserRequest) {
    const repository = getCustomRepository(UserEntity);
    const userAlreadyExists = await repository.findOne({ username });

    if (!userAlreadyExists) {
      throw new Error('User or password incorrect');
    }

    const passwordMatch = await compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      throw new Error('User or password incorrect');
    }

    const token = sign({}, process.env.KEY_TOKEN, {
      subject: userAlreadyExists.id,
      expiresIn: '20s',
    });
    return { token };
  }
}

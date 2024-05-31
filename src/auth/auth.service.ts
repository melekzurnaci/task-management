import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private userReposiyory: UserRepository) {}
  async singUp(authCredentialsDTO: any): Promise<void> {
    return this.userReposiyory.createUser(authCredentialsDTO);
  }
}

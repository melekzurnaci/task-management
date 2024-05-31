import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userReposiyory: UserRepository) {}

  async signUp(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    return this.userReposiyory.createUser(authCredentialsDTO);
  }

  async signIn(authCredentialsDTO: AuthCredentialsDTO): Promise<string> {
    const { userName, password } = authCredentialsDTO;
    console.log(`password: ${password}`);
    const user = await this.userReposiyory.findOne({ where: { userName } });

    if (user && (await bcrypt.compare(password, user.password))) {
      console.log(`user password: ${user.password}`);
      console.log(await bcrypt.compare(password, user.password));
      return 'success';
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}

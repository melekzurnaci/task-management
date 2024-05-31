import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }
  // custom repo
  async createUser(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    const { userName, password } = authCredentialsDTO;
    const user = this.create({ userName, password });
    this.save(user);
  }
}

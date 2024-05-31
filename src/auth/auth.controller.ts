import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // create new user
  @Post('/signup')
  createUser(@Body() authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    return this.authService.signUp(authCredentialsDTO);
  }
  @Post('/signin')
  singIn(@Body() authCredentialsDTO: AuthCredentialsDTO): Promise<string> {
    return this.authService.signIn(authCredentialsDTO);
  }
}

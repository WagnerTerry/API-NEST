import { IsString, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minNumbers: 1,
    minLowercase: 5,
    minUppercase: 1,
    minSymbols: 0,
  })
  password: string;
}

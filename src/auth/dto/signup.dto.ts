import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  @Matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, {
    message: 'invalid email',
  })
  email: string;
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  password: string;
}

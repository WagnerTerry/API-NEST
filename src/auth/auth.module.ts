import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: `3s3)|&S7'{MH<N5I&|>'{P.>-uR9-5;Y`,
    }),
    UserModule,
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

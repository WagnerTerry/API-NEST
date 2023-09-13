import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: `3s3)|&S7'{MH<N5I&|>'{P.>-uR9-5;Y`,
    }),
  ],
})
export class AuthModule {}

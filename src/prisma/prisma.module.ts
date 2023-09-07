import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // Declarando que o PrismaService faz parte desse módulo
  exports: [PrismaService], // Exportando ou dando acesso pra quem importar o módulo
})
export class PrismaModule {}

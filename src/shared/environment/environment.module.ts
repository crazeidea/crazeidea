import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentService } from './environment.service';

const envFilePath = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.local'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath })
  ],
  providers: [EnvironmentService]
})
export class EnvironmentModule { }

import { Module } from '@nestjs/common';
import { EnvironmentService } from 'src/shared/environment/environment.service';
import { SharedModule } from 'src/shared/shared.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    SharedModule
  ],
  providers: [AuthService, EnvironmentService]
})
export class AuthModule { }

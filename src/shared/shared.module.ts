import { Module } from '@nestjs/common';
import { EnvironmentModule } from './environment/environment.module';

@Module({
    imports: [
        EnvironmentModule,
    ],
    exports: [
        EnvironmentModule,
    ]
})
export class SharedModule { }

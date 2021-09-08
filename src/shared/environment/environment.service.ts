import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class EnvironmentService {

    constructor(
        private configService: ConfigService
    ) { }

    getTypeOrmOption(): TypeOrmModuleOptions {
        return {
            type: 'mariadb',
            charset: 'utf8mb4',
            host: this.configService.get('DB_HOST'),
            port: this.configService.get('DB_PORT'),
            username: this.configService.get('DB_USER'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_NAME'),
            synchronize: this.configService.get<boolean>('DB_SYNC'),
        }

    }

    getJwtConfig(): JwtModuleOptions {
        return {
            secret: this.configService.get('JWT_SECRET')
        }
    }
}

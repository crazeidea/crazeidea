import { ConfigModule } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentService } from './environment.service';

const envFilePath = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.local'

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ envFilePath })
      ],
      providers: [EnvironmentService],
    }).compile();

    service = module.get<EnvironmentService>(EnvironmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return JWT_SECRET', () => {
    expect(service.getJwtConfig()).toHaveProperty('secret')
  })

  it('should return TypeOrmModuleOption', () => {
    expect(service.getTypeOrmOption()).toHaveProperty('type')
    expect(service.getTypeOrmOption()).toHaveProperty('charset')
    expect(service.getTypeOrmOption()).toHaveProperty('port')
    expect(service.getTypeOrmOption()).toHaveProperty('username')
    expect(service.getTypeOrmOption()).toHaveProperty('password')
    expect(service.getTypeOrmOption()).toHaveProperty('database')
    expect(service.getTypeOrmOption()).toHaveProperty('synchronize')
  })
});

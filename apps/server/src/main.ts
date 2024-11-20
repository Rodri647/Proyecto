import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/server');
  
  app.enableCors({
    origin: 'http://localhost:5173', // Puedes ajustar este valor a tu dominio front-end
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });
  
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const corsConfig = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsConfig);
  await app.listen(4000);
}
bootstrap();

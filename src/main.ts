import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './user/Midddleware/logging.middleware';
import { AuthGuard } from './user/Guards/auth.guard';
import { AllExceptionsFilter } from './user/Exceptions/exception.handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new LoggerMiddleware().use)
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();

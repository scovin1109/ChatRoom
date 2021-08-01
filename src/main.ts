import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as path from 'path';

import { NestExpressApplication } from '@nestjs/platform-express';
import { WsAdapter } from './chat/ws.adapter';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors()

  app.useWebSocketAdapter(new WsAdapter(app));
  app.setBaseViewsDir(path.join(__dirname, 'views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
  console.log('http://localhost:3000/chat')
}
bootstrap();

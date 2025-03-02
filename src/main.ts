import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; // اضافه کردن NestExpressApplication
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';
import { join } from 'path';  // اضافه کردن import برای join از path

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // تنظیم مسیر فایل‌های استاتیک
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // تنظیم مسیر Views
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // تنظیم پارسیال‌ها (partials)
  hbs.registerPartials(join(__dirname, '..', 'views', 'layouts'));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views', 'layouts'));

  // تنظیم Engine به hbs
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();

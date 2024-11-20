import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EmailModule,
    ProductsModule,
    // Sirve el frontend en /app
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
      serveRoot: '/app', // Sirve el frontend en esta ruta
    }),
    // Sirve las imágenes en /uploads
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'server/uploads'),
      serveRoot: '/uploads',  // Ruta para acceder a las imágenes
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://rooot:secretpass123@localhost:27017')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


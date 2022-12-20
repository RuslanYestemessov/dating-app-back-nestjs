import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('Dating App')
        .setDescription('Dating App API')
        .setVersion('v0.1')
        .addTag('API')
        .build();
    await app.listen(3000);
}

bootstrap();

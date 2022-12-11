import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'dev-woo',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'dev-woo',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'dev-woo',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
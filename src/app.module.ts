import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileConsumer } from './bull/file.consumer';
import { FileProducerService } from './file.producer.service';
import { MessageConsumer } from './bull/message.consumer';
import { MessageProducerService } from './message.producer.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue(
      {
        name: 'message-queue',
      },
      {
        name: 'file-operation-queue',
      },
    ),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    MessageProducerService,
    FileProducerService,
    MessageConsumer,
    FileConsumer,
  ],
})
export class AppModule {}

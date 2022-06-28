import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BullQueueModule } from "./bull/bull.module";
import { RabbitModule } from "./rabbitmq/rabbit.module";

@Module({
  imports: [RabbitModule, BullQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Module } from "@nestjs/common";
import { RabbitController } from "./rabbit.controller";
import { MessagingService } from "./rabbit.consumer";

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: "exchange1",
          type: "topic",
        },
      ],
      uri: `amqp://guest:guest@localhost:5672/`,
      connectionInitOptions: { wait: false },
    }),
  ],
  controllers: [RabbitController],
  providers: [MessagingService],
  exports: [],
})
export class RabbitModule {}

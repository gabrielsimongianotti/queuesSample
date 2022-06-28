import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { BullController } from "./bull.controller";
import { BullConsumer } from "./bull.consumer";

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: "localhost",
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: "message-queue",
    }),
  ],
  controllers: [BullController],
  providers: [BullConsumer],
})
export class BullQueueModule {}

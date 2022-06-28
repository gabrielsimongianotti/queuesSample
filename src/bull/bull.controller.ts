import { InjectQueue } from "@nestjs/bull";
import { Controller, Get, Query } from "@nestjs/common";
import { Queue } from "bull";

@Controller("bull")
export class BullController {
  constructor(@InjectQueue("message-queue") private readonly bull: Queue) {}

  @Get("send-message")
  async sendMessage(@Query("message") message: string): Promise<string> {
    await this.bull.add("message", { message });
    return message;
  }
}

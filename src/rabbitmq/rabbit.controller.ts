import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
import { Controller, Get, Query } from "@nestjs/common";

@Controller("rabbitmq")
export class RabbitController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Get("send-message")
  async sendMessage(@Query("message") message: string): Promise<string> {
    await this.amqpConnection.publish("exchange1", "rpc-route", {
      msg: message,
    });
    return message;
  }
}

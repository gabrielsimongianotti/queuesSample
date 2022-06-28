import { AmqpConnection, RabbitRPC } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";
import { ConsumeMessage } from "amqplib";

@Injectable()
export class MessagingService {
  constructor() {}

  @RabbitRPC({
    exchange: "exchange1",
    routingKey: "rpc-route",
    queue: "rpc-queue",
  })
  public async rpcHandler(msg: string) {
    console.log("rabbitmq", msg);
  }
}

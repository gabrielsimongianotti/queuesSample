import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class MessageProducerService {
  constructor(@InjectQueue('message-queue') private readonly bull: Queue) {}

  async sendMessagemsg(message: string): Promise<void> {
    await this.bull.add('message', { message }, { delay: 1000 });
  }
}

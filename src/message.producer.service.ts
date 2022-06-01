import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class MessageProducerService {
  constructor(@InjectQueue('message-queue') private readonly bull: Queue) {}

  async sendMessagemsg(message: string): Promise<void> {
    console.log('sendMessagemsg', message);
    await this.bull.add('message', { message });
  }
}

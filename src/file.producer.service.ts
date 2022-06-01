import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class FileProducerService {
  constructor(@InjectQueue('file-operation-queue') private queue: Queue) {}

  async deleteFile(fileName: string) {
    const filePath = `/Users/gabrielsimongianiotti/project/queues-sample/images/${fileName}.png`;

    await this.queue.add('delete-file', {
      filePath: filePath,
    });
  }
}

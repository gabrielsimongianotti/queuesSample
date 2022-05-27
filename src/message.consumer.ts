import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('message-queue')
export class MessageConsumer {
  @Process('message')
  async messageJob(job: Job): Promise<void> {
    console.log(job.data);
  }
}

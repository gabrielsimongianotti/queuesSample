import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import * as fs from 'fs';

@Processor('file-operation-queue')
export class FileConsumer {
  @Process('delete-file')
  async filedeletionJob(job: Job<unknown>) {
    const jobData: any = job.data;
    fs.unlinkSync(jobData.filePath);
  }
}

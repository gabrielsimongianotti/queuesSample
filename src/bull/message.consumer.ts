import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import RabbitmqServer from 'src/rabbitmq/rabbitmq-server';

@Processor('message-queue')
export class MessageConsumer {
  @Process('message')
  async messageJob(job: Job): Promise<void> {
    console.log(job.data);
    const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
    await server.start();
    await server.publishInQueue('express', JSON.stringify(job.data));
    await server.publishInExchange(
      'amq.direct',
      'rota2',
      JSON.stringify(job.data),
    );
  }
}

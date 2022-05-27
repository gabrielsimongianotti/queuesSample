import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FileProducerService } from './file.producer.service';
import { MessageProducerService } from './message.producer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private messageProdecerService: MessageProducerService,
    private readonly fileProducerService: FileProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send')
  async sendMessage(@Query('message') message: string): Promise<string> {
    await this.messageProdecerService.sendMessagemsg(message);
    return message;
  }

  @Get('remove-file')
  async deleteFile(@Query('file') file: string) {
    await this.fileProducerService.deleteFile(file);
    return 'file deleted';
  }
}

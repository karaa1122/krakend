import { Controller, Get, Param } from '@nestjs/common';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';


@Controller('users')
export class AppController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Get()
  getUsers() {
    return { users: [{ id: 1, name: 'Kak Karaa' }] };
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id, name: `User ${id}` };
  }

  @Get('send')
  async sendMessage() {
    const message = 'Hello from RabbitMQ';
    await this.rabbitMQService.sendMessage(message);
    return { message };
  }
}

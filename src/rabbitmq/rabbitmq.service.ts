import { Injectable } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';


@Injectable()
export class RabbitMQService {
    @Client({
        transport: Transport.RMQ,
        options: {
        urls: ['amqp://localhost:5672'],
        queue: 'rabbit-mq',
        queueOptions: {
            durable: false,
        },
        },
    })
    private client: ClientProxy;

    async sendMessage(message: string) {
        this.client.send({ cmd: 'send' }, message);
    }

    async onModuleInit() {
        this.client.connect(); 
    }

}
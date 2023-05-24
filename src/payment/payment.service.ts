import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './schema/payment.schema';
import { Model } from 'mongoose';
import { PaymentSystem } from './payment.system';
import { TelegramBot } from 'src/telegram/telegram.bot';

@Injectable()
export class PaymentService {
    constructor(
        // @InjectModel(Payment.name) private readonly paymentModule: Model<PaymentDocument>,
        private readonly telegramBot: TelegramBot,
        private readonly paymentSystem: PaymentSystem
        ) {}
    async receivePayment(data: any): Promise<any> {
        const payment = await this.paymentSystem.processPayment(data);

        // const newPayment = new this.paymentModule(data);
        // await newPayment.save();

        return payment;
    }

    async advertisement(userId: string, message: string): Promise<void> {
        await this.telegramBot.sendMessageToUser(userId, message);
    }
}

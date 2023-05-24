import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TelegramModule } from './telegram/telegram.module';
import { PaymentModule } from './payment/payment.module';

@Module({
   imports: [TelegramModule,PaymentModule],
//  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/user'), TelegramModule, PaymentModule],
})
export class AppModule {}

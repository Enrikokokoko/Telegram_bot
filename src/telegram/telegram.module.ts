import { Module } from '@nestjs/common';
import { TelegramBot } from './telegram.bot';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from 'src/payment/schema/payment.schema';

@Module({
  // imports: [MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }])],
  providers: [TelegramBot],
  exports: [TelegramBot]
})
export class TelegramModule {}

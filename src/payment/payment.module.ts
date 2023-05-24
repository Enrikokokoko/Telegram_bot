import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './schema/payment.schema';
import { PaymentSystem } from './payment.system';
import { TelegramBot } from 'src/telegram/telegram.bot';

@Module({
  // imports: [ MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }])],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentSystem, TelegramBot]
})
export class PaymentModule {}

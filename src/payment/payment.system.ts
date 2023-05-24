import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentSystem {
  async processPayment(data: any): Promise<any> {

    return {userId: '1', message: 'your advertisement'}
  }
}
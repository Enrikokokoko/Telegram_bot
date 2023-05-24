import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService ) {}
    @Post()
    async receivePayment(@Body() data: any): Promise<any> {
        const payment = await this.paymentService.receivePayment(data)
        
        if(payment === true){
            await this.paymentService.advertisement(payment.userId, payment.message)        
        }

        return payment
    }
}

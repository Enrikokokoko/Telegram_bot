import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type PaymentDocument = Payment & Document

@Schema()
export class Payment {
    @Prop({ required: true})
    userId: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment)
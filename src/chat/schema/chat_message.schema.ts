import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type ChatDocument = Chat_message & Document;

@Schema()
export class Chat_message{

  @Prop()
  userId: string
 
  @Prop()
  content:string


  @Prop({type: 'string',default: new Date().valueOf()})
  time:string;

  }
  export const ChatSchema = SchemaFactory.createForClass(Chat_message);
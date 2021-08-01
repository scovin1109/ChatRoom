import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserMapDocument = UserMap & Document;

@Schema()
export class UserMap {
    @Prop()
    userId: string;

    @Prop()
    friendId: string;

}

export const UserMapSchema = SchemaFactory.createForClass(UserMap);
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EntityRepository } from "../database/entity.repository";

import { Chat_message, ChatDocument } from "./schema/chat_message.entity";

@Injectable()
export class ChatRepository extends EntityRepository<ChatDocument> {
    constructor(@InjectModel(Chat_message.name) chatModel: Model<ChatDocument>) {
      super(chatModel)
    }
}
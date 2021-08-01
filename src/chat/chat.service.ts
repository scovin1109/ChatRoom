
import { Chat_message } from "../chat/schema/chat_message.entity";
import { Injectable } from "@nestjs/common";
import {ChatRepository} from "./chat.repository"



@Injectable()
export class ChatService {
    constructor( private readonly chatRepository : ChatRepository){}

    async getAllChatMessageByUserId(userId:string){
        console.log(userId)
        return await this.chatRepository.find({ where: { userId: userId} })
    }
    async createChatMessage(userId:string,content:string,time:string){
        return await this.chatRepository.create({
            userId,
            content,
            time
        })
    }

}
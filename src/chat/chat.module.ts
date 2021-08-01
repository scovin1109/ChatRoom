import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat.gateway';
import { Chat_message,ChatSchema } from './schema/chat_message.schema';
import { ChatService } from './chat.service';
import {ChatRepository} from './chat.repository'
import { ChatController } from './chat.controller';
@Module({
  imports: [

    MongooseModule.forFeature([{ name: Chat_message.name, schema: ChatSchema  }]),
    
  ],
  controllers:[ChatController],
  providers: [ChatGateway,ChatService,ChatRepository],
})
export class ChatModule {

  }
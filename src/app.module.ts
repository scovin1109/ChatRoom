import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FriendModule } from './friend/friend.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/chatdata'), UsersModule,ChatModule, FriendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

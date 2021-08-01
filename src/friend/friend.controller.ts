  
import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { FriendService } from './friend.service';


@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get()
  getFriends(@Query('userId') userId: string) {
    return this.friendService.getFriends(userId);
  }

}
import { Controller, Get, Request, Response, Next, HttpStatus, Post } from '@nestjs/common';

@Controller()
export class ChatController {
    constructor() { }
    @Get('chat')
    async chat( @Request() req, @Response() res, @Next() next) {
        res.render('./Chat/chat', { title: "聊天室" });
    }

}
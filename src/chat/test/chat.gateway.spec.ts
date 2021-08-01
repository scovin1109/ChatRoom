import { Test } from '@nestjs/testing'

import * as WebSocket from 'ws'
import {ChatGateway} from '../chat.gateway'
import { WsAdapter } from '../ws.adapter';

import {ChatRepository} from '../chat.repository'
import { getModelToken } from "@nestjs/mongoose"
import {Chat_message} from '../schema/chat_message.schema'
import {ChatModel} from '../test/support/chat.model'

describe('Chatgateway', () => {
    let address:any="";
    let baseAddress:string="";

    beforeAll(async()=>{
        const modsocket = await Test.createTestingModule({
            imports:[ChatGateway],
            providers:[ChatRepository,
            {
                provide: getModelToken(Chat_message.name),
                useClass: ChatModel
            }
            ]
        }).compile();
        const app = modsocket.createNestApplication()
        app.useWebSocketAdapter(new WsAdapter(app))
        await app.init()
        address = app.getHttpServer().listen().address()
        baseAddress = `http://[${address.address}]:${address.port}`
        
        
    })
    describe('socket connect',() =>{
        it('should connect successfully',(done)=>{
            console.log
            const socket = new WebSocket(baseAddress)
            socket.on('open',()=>{console.log("Connecting");done()})
                  .on('close',()=> done)    
        })
    })

});


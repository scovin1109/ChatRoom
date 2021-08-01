import { Test } from '@nestjs/testing'

import * as WebSocket from 'ws'
import {ChatGateway} from '../chat.gateway'
import { WsAdapter } from '../ws.adapter';
import { ChatModule } from '../chat.module';


describe('Chatgateway', () => {
    let address:any="";
    let baseAddress:string="";

    beforeAll(async()=>{
        const modsocket = await Test.createTestingModule({
            imports:[ChatGateway]
        }).compile();
        const app = modsocket.createNestApplication()
        app.useWebSocketAdapter(new WsAdapter(app))
        await app.init()
        address = app.getHttpServer().listen().address()
        baseAddress = `http://[${address.address}]:${address.port}`
  
        
    })
    describe('socket connect',() =>{
        it('should connect successfully',(done)=>{
            const socket = new WebSocket(baseAddress)
            socket.on('open',()=>{console.log("Connecting");done()})
                  .on('close',()=> done)
        
        })
    })

});


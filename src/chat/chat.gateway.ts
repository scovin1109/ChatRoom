import { WebSocketGateway, SubscribeMessage, MessageBody,ConnectedSocket,WebSocketServer} from '@nestjs/websockets';
import * as WebSocket from 'ws';
import { IO} from 'fp-ts/lib/IO'
import { ChatRepository } from './chat.repository';
import { UserMap } from 'src/friend/schemas/friend.schema';

@WebSocketGateway(3002)
export class ChatGateway  {
  constructor(private readonly chatRepository : ChatRepository){}
  @WebSocketServer() server: any;
  
    @SubscribeMessage('hello')
    hello(@MessageBody() data: any): any {
      return {
        "event": "hello",
        "data": data,
        "msg": 'rustfisher.com'
      };
    }
  
    @SubscribeMessage('PushMessage')
    async PushMessage(@MessageBody() data: any, @ConnectedSocket() client: WebSocket){
      const now: IO<string> = () => String(new Date().getTime())
      const payload = {
        userId:'123',
        content:data,
        time:now()
      }
     this.server.clients.forEach(client => {
        client.send(JSON.stringify({ event: 'newMessage', data: data, time:now()}));
      });
     await this.chatRepository.create(payload)
     
    }

    
 

}
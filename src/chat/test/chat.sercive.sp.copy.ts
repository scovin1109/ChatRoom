// import { Test, TestingModule } from '@nestjs/testing';

// import {ChatService} from '../chat.service'
// import {Chat_message} from '../schema/chat_message.entity'
// import {ChatRepository} from '../chat.repository'
// import { resourceLimits } from 'worker_threads';

// describe('ChatService', () => {
//   let chatService : ChatService;

//   const mockChatRepository = {
//     find:jest.fn().mockImplementation(id => id),
//     create:jest.fn()
//     .mockImplementation(chat_messages => 
//       Promise.resolve({...chat_messages}))
//   }
//   beforeEach(async () => {
//     const chat: TestingModule = await Test.createTestingModule({
//       providers: [ChatService],
//     })
//     .overrideProvider(ChatService)
//     .useValue(ChatRepository)
//     .compile();
  
//     chatService = chat.get<ChatService>(ChatService);
//   });

//   describe('getAllChatMessageByUserId ', () => {
//     it('should retrun Promise{}', () => {
//       const userId = 1;
//       const promise = Promise.resolve({});
//       expect(chatService.getAllChatMessageByUserId(userId)).toEqual(promise);
//     });
//   });

//   describe('createChatMessage ', () => {
//     it('should retrun Promise{}', async() => {
//       const ChatMessageDto = {
//         user_id:1,
//         content:'你好嗎',
//         time:'1991-11-09'
//       }

//       expect(await chatService.createChatMessage(ChatMessageDto)).toEqual({
//         user_id:1,
//         friend_id:2,
//         content:'你好嗎',
//         _id: "0",
//         time:'1991-11-09'
//       });
    
//     });
//   });

//   // describe('deleteChatMessage',() =>{
//   //   it('should return promise {id}', async () =>{
//   //     const id = '1'
//   //     expect(await chatService.deleteChatMessage(id)).toEqual(id)
//   //   })
//   // })
// });

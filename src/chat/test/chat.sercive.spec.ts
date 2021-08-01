import { Test, TestingModule } from '@nestjs/testing';
import { ChatDto } from "./dto/chat_message";
import {ChatService} from '../chat.service'
import {chatStub} from '../stubs/chat.stub'


jest.mock('../chat.service')
describe('ChatService', () => {
  let chatService : ChatService;

  beforeEach(async () => {
    const chat: TestingModule = await Test.createTestingModule({
      providers: [ChatService],
    })
    .compile();
  
    chatService = chat.get<ChatService>(ChatService);
  });

  it('should be definded', ()=>{
    expect(chatService).toBeDefined();
  })
  describe('getAllChatMessageByUserId ', () => {
    it('should retrun Promise{}', () => {
      const userId = "123";
      const promise:object= Promise.resolve({});
      expect(chatService.getAllChatMessageByUserId(userId)).toEqual(promise);
    });
  });

  describe('createChatMessage ', () => {
    it('should retrun Promise{}', async() => {

      const userId = '123'
      const content = '你好嗎'
      const time = '2021-07-28'
      expect( chatService.createChatMessage(userId,content,time)).toEqual(expect.any(Object))

    });
  });

});

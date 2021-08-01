import { Chat_message } from "../schema/chat_message.entity"

export const chatStub = ():Chat_message=> {
 return {
    userId: '123',
    content:'你好',
    time:'2021-07-25'
  }
}
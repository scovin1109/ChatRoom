import { User } from "../../schemas/user.schema";

export const userStub = (): User => {
 return {
    userId: '123',
    email: 'test@example.com',
    account: '12345',
    passwords:'12345',
    message:  '你好'
  }
}
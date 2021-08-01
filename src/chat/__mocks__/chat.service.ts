import { chatStub} from '../stubs/chat.stub'

export const ChatService = jest.fn().mockReturnValue({
createChatMessage: jest.fn().mockResolvedValue(chatStub()),
getAllChatMessageByUserId:jest.fn().mockRejectedValue(chatStub().userId)
})
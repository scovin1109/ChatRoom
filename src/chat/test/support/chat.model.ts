import { MockModel } from "../../../database/test/support/mock.model";
import { Chat_message} from '../../schema/chat_message.schema'
import { chatStub } from "../../stubs/chat.stub";

export class ChatModel extends MockModel<Chat_message> {
  protected entityStub = chatStub ()
}
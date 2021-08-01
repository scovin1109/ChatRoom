import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserMap } from './schemas/friend.schema';
// import { FriendMessages } from './schemas/frinedMessage.schema';
import {toError} from 'fp-ts/lib/Either'
import { IOEither,tryCatch } from 'fp-ts/lib/IOEither';
import { Model, Mongoose } from 'mongoose';
@Injectable()


export class FriendService {
    constructor(
        @InjectModel(UserMap.name) public friendRepository: Model <UserMap>,
      ){}


    async getFriends(userId:string):Promise<IOEither<Error,Object>>{
        return(
        tryCatch(async()=> 
        userId
        ?{ msg:'獲取好友成功', data: await this.friendRepository.find({userId: userId}) }
        :{ msg:'獲取好友成功', data: await this.friendRepository.find({userId: userId}) }
        ,toError)
        )
    }
    

}

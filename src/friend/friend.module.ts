import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserMap, UserMapSchema } from "./schemas/friend.schema";

import { FriendController } from "./friend.controller";
import { FriendService } from "./friend.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: UserMap.name, schema: UserMapSchema }])],
    controllers: [FriendController],
    providers: [FriendService ]
})
export class FriendModule {}
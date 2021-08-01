import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { FriendController } from '../friend.controller';
import { FriendService}  from '../friend.service'
import {UserMap} from '../schemas/friend.schema'

describe('FriendController', () => {
  let friendcontroller: FriendController;
  let friendservice: FriendService;
  const mockUserMapRepository={
    find:jest.fn().mockImplementation(useId=>Promise.resolve({...UserMap}))
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FriendController],
      providers:[FriendService,{
        provide:getModelToken(UserMap.name),
        useValue:mockUserMapRepository
      }]
    }).compile();

    friendcontroller = module.get<FriendController>(FriendController);
    friendservice = module.get<FriendService>(FriendService);
  });

  it('should be defined friendcontroller', () => {
    expect(friendcontroller).toBeDefined();
  });

  it('should be defined servicecontroller', () => {
    expect(friendservice).toBeDefined();
  });

  it('should find the user friends', async()=>{
    const userId = '123'
    const expected = expect.any(Function)
    expect(await friendservice.getFriends(userId)).toEqual(expected)
  })


});

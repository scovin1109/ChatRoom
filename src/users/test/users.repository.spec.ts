import { getModelToken } from "@nestjs/mongoose"
import { Test } from "@nestjs/testing"
import { FilterQuery } from "mongoose"
import { User } from "../schemas/user.schema"
import { UsersRepository } from "../users.repository"
import { userStub } from "./stubs/user.stub"
import { UserModel } from "./support/user.model"

describe('UsersRepository', () => {
  let usersRepository: UsersRepository;

  describe('find all operations', () => {
    let userModel: UserModel;
    let userFilterQuery: FilterQuery<User>;

    beforeEach(async () => {
      const Usermodule = await Test.createTestingModule({
        providers: [
          UsersRepository,
          {
            provide: getModelToken(User.name),
            useClass: UserModel
          }
        ]
      }).compile();

      usersRepository = Usermodule.get<UsersRepository>(UsersRepository);
      userModel = Usermodule.get<UserModel>(getModelToken(User.name));

      userFilterQuery = {
        userId: userStub().userId
      }

      jest.clearAllMocks();
    })

    describe('findOne', () => {
      describe('when findOne is called', () => {
        let user: User;

        beforeEach(async () => {
          jest.spyOn(userModel, 'findOne');
          user = await usersRepository.findOne(userFilterQuery);
        })

        it('then it should call the userModel', () => {
          expect(userModel.findOne).toHaveBeenCalledWith(userFilterQuery, { _id: 0, __v: 0 });
        })

        it('then it should return a user', () => {
          expect(user).toEqual(userStub());
        })
      })
    })

    describe('find', () => {
      describe('when find is called', () => {
        let users: User[];

        beforeEach(async () => {
          jest.spyOn(userModel, 'find');
          users = await usersRepository.find(userFilterQuery);
        })

        it('then it should call the userModel', () => {
          expect(userModel.find).toHaveBeenCalledWith(userFilterQuery);
        })

        it('then it should return a user', () => {
          expect(users).toEqual([userStub()]);
        })
      })
    })

    describe('findOneAndUpdate', () => {
      describe('when findOneAndUpdate is called', () => {
        let user: User;

        beforeEach(async () => {
          jest.spyOn(userModel, 'findOneAndUpdate');
          user = await usersRepository.findOneAndUpdate(userFilterQuery, userStub());
        })

        it('then it should call the userModel', () => {
          expect(userModel.findOneAndUpdate).toHaveBeenCalledWith(userFilterQuery, userStub(), { new: true });
        })

        it('then it should return a user', () => {
          expect(user).toEqual(userStub());
        })
      })
    })
  })

  describe('create operations', () => {
    beforeEach(async () => {
      const Usermodule = await Test.createTestingModule({
        providers: [
          UsersRepository,
          {
            provide: getModelToken(User.name),
            useValue: UserModel,
          },
        ],
      }).compile();

      usersRepository = Usermodule.get<UsersRepository>(UsersRepository);
    });

    describe('create', () => {
      describe('when create is called', () => {
        let user: User;
        let saveSpy: jest.SpyInstance;
        let constructorSpy: jest.SpyInstance;

        beforeEach(async () => {
          saveSpy = jest.spyOn(UserModel.prototype, 'save');
          constructorSpy = jest.spyOn(UserModel.prototype, 'constructorSpy');
          user = await usersRepository.create(userStub());
        })

        it('then it should call the userModel', () => {
          expect(saveSpy).toHaveBeenCalled();
          expect(constructorSpy).toHaveBeenCalledWith(userStub())
        })

        it('then it should return a user', () => {
          expect(user).toEqual(userStub());
        })
      })
    })
  })
})
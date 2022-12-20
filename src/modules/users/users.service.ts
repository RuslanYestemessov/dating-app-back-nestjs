import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from './entities/user.entity';
import {Model} from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>
    ) {
    }

    create(createUserDto: CreateUserDto) {
        return this.userModel.create({
            ...createUserDto,
            createdAt: new Date(),
            balance: 0,
            isDeleted: false,
            friends: []
        });
    }

    findAll() {
        return this.userModel.find().exec();
    }

    findOne(id: number) {
        return this.userModel.findById(id).exec();
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
    }

    remove(id: number) {
        return this.userModel.findByIdAndUpdate(id, {deleted: true});
    }
}

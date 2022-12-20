import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {GenderType} from '../../../common/types/gender.type';
import {Document, ObjectId} from 'mongoose';

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    birthday: Date;

    @Prop()
    gender: GenderType;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    balance: number;

    @Prop()
    friends: ObjectId[];

    @Prop()
    createdAt: Date;

    @Prop()
    isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

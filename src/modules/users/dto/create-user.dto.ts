import {GenderType} from '../../../common/types/gender.type';

export class CreateUserDto {
    name: string;
    birthday: Date;
    gender: GenderType;
    email: string;
    password: string;
}

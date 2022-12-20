import {Module} from '@nestjs/common';
import {AuthModule} from '../auth/auth.module';
import {UsersModule} from '../users/users.module';
import {SubscriptionModule} from '../subscription/subscription.module';
import {MessagesModule} from '../messages/messages.module';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://root:root@localhost:27017/', {
            dbName: 'datingApp'
        }),
        ConfigModule.forRoot(),
        AuthModule,
        UsersModule,
        SubscriptionModule,
        MessagesModule
    ]
})
export class AppModule {
}

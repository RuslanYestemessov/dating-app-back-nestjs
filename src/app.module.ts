import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [AuthModule, UsersModule, SubscriptionModule, MessagesModule]
})
export class AppModule {}

import { Module, NestModule, MiddlewareConsumer} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './middleware/logger.middleware'
import { UsersModule } from './users/users.module'
import { UsersService } from './users/users.service'
import { WorkspacesModule } from './workspaces/workspaces.module'
import { ChannelsModule } from './channels/channels.module'
import { DmsModule } from './dms/dms.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    WorkspacesModule,
    ChannelsModule,
    DmsModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersService ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}

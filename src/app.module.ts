import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoDbController } from './todo-db/todo-db.controller';
import { TodoDbService } from './todo-db/todo-db.service';

@Module({
  imports: [
    PremierModule,
    TodoModule,
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 4532,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, TodoDbController],
  providers: [AppService, TodoDbService],
})
export class AppModule {}

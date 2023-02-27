import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, UsePipes, ValidationPipe
} from "@nestjs/common";
import { Todo } from './todo';
import { AddTodoDto } from 'src/DTO/Todo/add_todo_dto';
import { UpdateTodoDto } from 'src/DTO/Todo/update_todo_dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  private todos: Array<Todo> = [];
  @Get('/')
  getTodos() {
    return this.todos;
  }
  @Post('/')
  @UsePipes(ValidationPipe)
  addTodo(@Body() todo: AddTodoDto): void {
    this.todoService.addTodo(this.todos, todo);
  }
  @Get('/:id')
  getTodo(@Param('id') id: string): Todo {
    return this.todoService.getTodo(this.todos, id);
  }
  @Delete('/:id')
  deleteTodo(@Param('id') id: string): void {
    this.todoService.deleteTodo(this.todos, id);
  }
  @Patch('/:id')
  updateTodo(@Param('id') id: string, @Body() todo: UpdateTodoDto): void {
    this.todoService.updateTodo(this.todos, id, todo);
  }
}

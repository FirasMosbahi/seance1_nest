import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TodoDbService } from './todo-db.service';
import { AddTodoDto } from '../DTO/Todo/add_todo_dto';
import { UpdateTodoDto } from '../DTO/Todo/update_todo_dto';
import { SearchDTO } from '../DTO/Todo/search_todos_dto';
import { TodoStatusEnum } from '../todo/todo';
import { TodoEntity } from '../entities/todo_entity';

@Controller({
  path: 'todo',
  version: '2',
})
export class TodoDbController {
  constructor(private todoDbService: TodoDbService) {}
  @Post('/')
  addTodo(@Body() todo: AddTodoDto): void {
    this.todoDbService.addTodo(todo);
  }
  @Patch('/:id')
  updateTodo(@Param('id') id: string, @Body() todo: UpdateTodoDto): void {
    this.todoDbService.updateTodo(id, todo);
  }
  @Delete('/:id')
  deleteTodo(@Param('id') id: string): void {
    this.todoDbService.deleteTodo(id);
  }
  @Get('/:status')
  getTodosCountByCriteria(@Param('status') status: TodoStatusEnum): number {
    let result: number;
    this.todoDbService
      .getTodosNumberByStatus(status)
      .then((value) => (result = value));
    return result;
  }
  @Get('/all')
  getAllTodos(
    @Query('critere') critere,
    @Query('status') status,
  ): Array<TodoEntity> {
    let todos: Array<TodoEntity>;
    if (critere == null && status == null) {
      this.todoDbService.getAllData().then((value) => (todos = value));
    } else {
      const searchCriteria: SearchDTO = new SearchDTO();
      searchCriteria.status = status;
      searchCriteria.critere = critere;
      this.todoDbService.getTodosByCriteria(searchCriteria);
    }
    return todos;
  }
}

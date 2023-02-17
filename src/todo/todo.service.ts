import { Inject, Injectable } from '@nestjs/common';
import { AddTodoDto } from '../DTO/Todo/add_todo_dto';
import { Todo, TodoStatusEnum } from './todo';
import { UpdateTodoDto } from '../DTO/Todo/update_todo_dto';
import { IT } from 'src/injection_token_config';

@Injectable()
export class TodoService {
  constructor(@Inject(IT.COMMON_MODULE) private v4) {}
  addTodo(todoList: Array<Todo>, todo: AddTodoDto): void {
    const newTodo = new Todo(
      this.v4(),
      todo.name,
      todo.description,
      new Date(),
      TodoStatusEnum.waiting,
    );
    todoList.push(newTodo);
  }
  getTodo(todoList: Array<Todo>, id: string): Todo {
    return todoList.find((value) => value.id == id);
  }
  deleteTodo(todoList: Array<Todo>, id: string): void {
    todoList = todoList.filter((value) => value.id != id);
  }
  updateTodo(todoList: Array<Todo>, id: string, todo: UpdateTodoDto): void {
    const todoToUpdate: Todo = todoList.find((value) => value.id == id);
    if (todo.name != null) {
      todoToUpdate.name = todo.name;
    }
    if (todo.description != null) {
      todoToUpdate.description = todo.description;
    }
    if (todo.dateDeCreation != null) {
      todoToUpdate.dateDeCreation = todo.dateDeCreation;
    }
    if (todo.status != null) {
      todoToUpdate.status = todo.status;
    }
  }
}

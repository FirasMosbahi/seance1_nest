import { Inject, Injectable } from '@nestjs/common';
import { AddTodoDto } from '../DTO/Todo/add_todo_dto';
import { TodoEntity } from '../entities/todo_entity';
import { UpdateTodoDto } from '../DTO/Todo/update_todo_dto';
import {Like, Repository, UpdateResult} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoStatusEnum } from '../todo/todo';
import { SearchDTO } from '../DTO/Todo/search_todos_dto';

@Injectable()
export class TodoDbService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}
  async addTodo(addTodoDto: AddTodoDto): Promise<TodoEntity> {
    const todo = new TodoEntity(addTodoDto.name, addTodoDto.description);
    return await this.todoRepository.save(todo);
  }
  async updateTodo(
    id: string,
    updateTodoDto: UpdateTodoDto,
  ): Promise<UpdateResult> {
    return await this.todoRepository.update(id, { ...updateTodoDto });
  }
  async deleteTodo(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
  async softDeleteTodo(id: string): Promise<void> {
    await this.todoRepository.softDelete(id);
  }
  async getTodosNumberByStatus(status: TodoStatusEnum): Promise<number> {
    return await this.todoRepository.count({ where: { status } });
  }
  async getAllData(): Promise<Array<TodoEntity>> {
    return await this.todoRepository.find();
  }
  async getTodosByCriteria(
    searchCriteria: SearchDTO,
  ): Promise<Array<TodoEntity>> {
    return await this.todoRepository.find({
      where: [
        { name: Like(`%${searchCriteria.critere}%`) },
        { description: Like(`%${searchCriteria.critere}%`) },
        { status: searchCriteria.status },
      ],
    });
  }
}

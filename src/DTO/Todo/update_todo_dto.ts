import { TodoStatusEnum } from 'src/todo/todo';
export class UpdateTodoDto {
  name: string | null;
  description: string | null;
  dateDeCreation: Date | null;
  status: TodoStatusEnum | null;
}

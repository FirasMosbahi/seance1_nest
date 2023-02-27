import { TodoStatusEnum } from '../../todo/todo';

export class SearchDTO {
  critere: string | null;
  status: TodoStatusEnum | null;
}

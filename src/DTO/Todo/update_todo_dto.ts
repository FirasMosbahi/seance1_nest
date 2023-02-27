import { TodoStatusEnum } from 'src/todo/todo';
import { IsEnum, isEnum, MaxLength, MinLength } from 'class-validator';
import { ErrorMessages } from './ErrorMessagesEnum';

const status = [
  TodoStatusEnum.waiting,
  TodoStatusEnum.actif,
  TodoStatusEnum.done,
];
export class UpdateTodoDto {
  @MinLength(3, { message: ErrorMessages.MinTitleLengthExceeded })
  @MaxLength(10, { message: ErrorMessages.MaxTitleLengthExceeded })
  name: string | null;
  @MinLength(10, { message: ErrorMessages.MinDescriptionLengthExceeded })
  description: string | null;
  dateDeCreation: Date | null;
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum | null;
}

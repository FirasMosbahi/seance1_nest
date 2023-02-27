import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ErrorMessages } from "./ErrorMessagesEnum";

export class AddTodoDto {
  @IsNotEmpty({message : ErrorMessages.EmptyTitle})
  @MinLength(3 , {message : ErrorMessages.MinTitleLengthExceeded})
  @MaxLength(10, {message : ErrorMessages.MaxTitleLengthExceeded})
  name: string;
  @IsNotEmpty({message : ErrorMessages.EmptyDescription})
  @MinLength(10, {message : ErrorMessages.MinDescriptionLengthExceeded})
  description: string;
}

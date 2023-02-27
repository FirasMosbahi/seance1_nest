import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller({
  path: 'todo',
  version: '2',
})
export class TodoDbController {
    
}

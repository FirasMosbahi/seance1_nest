import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get('get')
  getPremier(): string {
    console.log('get');
    return 'get';
  }
  @Post('post')
  postPremier(): string {
    console.log('post');
    return 'post';
  }
  @Delete('delete')
  deletePremier(): string {
    console.log('delete');
    return 'delete';
  }
  @Put('put')
  putPremier(): string {
    console.log('put');
    return 'put';
  }
  @Patch('patch')
  patchPremier(): string {
    console.log('patch');
    return 'patch';
  }
}

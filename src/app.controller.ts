import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class AppController {
  @Get()
  getUsers() {
    return { users: [{ id: 1, name: 'Kak Karaa' }] };
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id, name: `User ${id}` };
  }
}

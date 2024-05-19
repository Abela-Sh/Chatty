import { Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from './Guards/auth.guard';

@Controller('user')
// @UseGuards(AuthGuard)
export class UserController {
    constructor(private userService: UserService){}
    @Get()
    findAll(){
        const data = this.userService.getData()
        return data
    }

    @Get(':id')
    @UsePipes(ParseIntPipe)
    findOne(@Param('id') id: number) {
      return `Item #${id}`;
    }

    @Post()
    login(){
        const data  = this.userService.login()
        return data;
    }
}

// @UseGuards(AuthGuard)
// export class ProtectedController {
//   @Get()
//   getProtected() {
//     return 'This route is protected';
//   }
// }


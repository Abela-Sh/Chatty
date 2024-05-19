import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from './Guards/auth.guard';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
    constructor(private userService: UserService){}
    @Get()
    findAll(){
        const data = this.userService.getData()
        return data
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


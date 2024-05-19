import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getData(){
        const user = {
            id:1,
            name: 'Joe',
            email: 'joe@gmail.com'
        }
        return user
    }

    login(){
        return 'Logged In.'
    }
}

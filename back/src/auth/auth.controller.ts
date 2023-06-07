import { Get, Post, Delete, Body, Controller, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
import { Request } from 'express';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/sign')
    login(@Body() signUpDto: UserDto, @Req() request: Request) {
        // console.log(request.body)
        return this.authService.login(signUpDto)
    }

    // @Get('/login')
    // login(@Body() loginDto: UserDto): Promise<{ token: string }> {
    //     return this.authService.login(loginDto)
    // }

    @Delete('/delete')
    async deleteUser(@Body() userProps: UserDto ) {
        return this.authService.deleteById(userProps)
    }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from './dto/user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
        private configService: ConfigService
    ){}

    async login(signUpDto: UserDto) {
        const { address, ...userData } = signUpDto
    
        const user = await this.userModel.findOne({ address });
        const client = this.configService.get('APP_URL')
        if (!user) {
            const newUser = await this.userModel.create({
                name: "no name",
                userImg: `${client}/default-image.png`,
                address,
                hasCollection: false,
                verified : false,
                ...userData
            });
            return newUser;
        }
    
        return user;
    }

    // async login(loginDto: UserDto): Promise<{ token: string }> {
    //     const { address } = loginDto;

    //     const user = await this.userModel.findOne({ address })
    //     if(!user) {
    //         throw  new UnauthorizedException('login failed')
    //     }

    //     const token = this.jwtService.sign({ 
    //         id: user._id
    //     })

    //     return { token }
    // }

    async deleteById(userProps: UserDto) {
        const { address } = userProps;
        const user = await this.userModel.findOne({address})
        if(!user) {
            throw  new UnauthorizedException('user not found')
        }
        return await this.userModel.findOneAndDelete({ address: address })
    }
}

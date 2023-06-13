import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Collection } from './schemas/collection.schema';
import { CollectionDto } from './dto/collection.dto';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class CollectionService {
    constructor(
        @InjectModel(Collection.name)
        private collectionModel: mongoose.Model<Collection>,
        private configService: ConfigService
    ) { }

    async find(body: CollectionDto): Promise<Collection> {
        try {
            const client = this.configService.get('APP_URL')
            const { name, symbol, url } = body;
            const checkDuplicate = await this.collectionModel.findOne({
                $or: [{ name }, { symbol }, { url: `${client}/collections/${url}` }],
            });
            return checkDuplicate

        } catch (e) {
            throw new Error(e);
        }
    }

    async create(collectionDto: CollectionDto): Promise<Collection> {
        console.log(collectionDto)
        const client = this.configService.get('APP_URL')


        const newCollection = await this.collectionModel.create({
            ...collectionDto,
            url: `${client}/collections/${collectionDto.url}`
        })
        console.log(newCollection)

        return newCollection
    }
}

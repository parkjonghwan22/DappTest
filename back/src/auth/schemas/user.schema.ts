import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class User {

    @Prop({ unique: [ true, 'Duplicated Address']})
    address: string

    @Prop()
    name: string

    @Prop()
    userImg: string
}

export const UserSchema = SchemaFactory.createForClass(User)
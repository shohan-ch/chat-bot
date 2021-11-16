import { Model, Table, Default, Column as Col, CreatedAt, UpdatedAt, DataType, ForeignKey } from 'sequelize-typescript'
import { User } from './User'

@Table({
    tableName:'messages'
})
export class Message extends Model {

    @Col
    name!:string



    @ForeignKey(()=>User)
    @Col
    senderId!: number

    @Col
    type!:string

    @Col(DataType.TEXT)
    text!:string


    @Default('current_timestamp()')
    @CreatedAt
    @Col
    createdAt!:Date 

    @Default('null on update current_timestamp()')
    @UpdatedAt
    @Col
    updatedAt!:Date 
}
import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
    // 4 digit integer
    @column({ isPrimary: true })
    public id: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column()
    public name: string

    // format: @username#id
    @column()
    public userName: string

    @column()
    public bio: string

    @column()
    public email: string

    @column()
    public password: string

    @column()
    public birthDate: DateTime
}

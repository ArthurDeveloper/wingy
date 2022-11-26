import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async index(ctx: HttpContextContract) {
        return await User.all();
    }

    public async get(ctx: HttpContextContract) {
        const id = parseInt(ctx.request.param('id'));

        return User.find(id);
    }

    public async create(ctx: HttpContextContract) {
        console.log(ctx.request.body());
        const { name, userName, bio, email, password, birthDate } = ctx.request.body();
        const user = User.create({
            name,
            userName,
            bio,
            email,
            password,
            birthDate,
        });

        return user;
    }
}

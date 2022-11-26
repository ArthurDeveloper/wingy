import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async index(ctx: HttpContextContract) {
        return [
            {
                name: 'Rick Astley',
                userName: '@rickroll_man#1234',
                email: 'nevergonnagive@you.up',
                bio: 'Never gonna let you down',
                birthDate: new Date(1966, 2, 6),
                posts: [
                    {
                        title: 'Never gonna run around',
                        content: 'And desert you',
                    },
                    {
                        title: 'Never gonna make you cry',
                        content: 'Never gonna say goodbye',
                    },
                    {
                        title: 'Never gonna tell a lie',
                        content: 'And hurt you',
                    }
                ],
            }
        ];
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

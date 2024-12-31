import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    await prisma.userTable.create({
        data:{
            username:username,
            password : password,
            name : name 
        }
    })
    console.log("Created useR SUCESSFULY")
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const res = await prisma.userTable.findUnique({
        where:{
            id: userId
        }
    })
    return res
}
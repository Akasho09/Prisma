import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try  {
        const res = await prisma.todoTable.create({
        data: {
            title : title ,
            description :  description ,
            userId : userId,
        }
    })
    console.log("Creted Todo Sucessfully")
    return res ;
} catch(err){
    console.log("Error occoured while creating a Todo" + err)
}
}
// createTodo(1, "Gym" , "GSKD SDKS AK");
// createTodo   (2, "Gym 3" , "GSKD SDKS AK3");
// createTodo   (2, "Gym 4" , "GSKD SDKS AK3");


/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
   try {
    const res = await prisma.todoTable.update({
        where:{
            id:todoId
        },
        data:{
            done : true
        }
    })
    console.log("Updated Todo : " , res)
    return res ;
}catch {
    console.log("Error Updating Todo" )
}
}
// updateTodo(2);

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const res = await prisma.todoTable.findMany({
        where:{
            userId : userId
        }
    })
    console.log(res)
}
getTodos(2);
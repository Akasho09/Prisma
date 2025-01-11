import { PrismaClient } from "@prisma/client";

const akash = new PrismaClient();



async function findDetails (){
   const res = await akash.todo.findMany({
        where:{
            user_id : 1
        },
        select: {
            title :true,
            user: true
        }
    })
    console.log(res)
}




// async function findDetails (){
//     await akash.userTable.create({
//         data: {
//             id : 1, 
//             firstname : "akash",
//             lastname : "malik",
//             username : 'aka'
//         }
//     })
//    const res = await akash.todo.createMany({
//        data:[{
//         title :  "akas",
//         description : "aka",
//         user_id : 1 ,
//        },{
//         title :  "akas2",
//         description : "aka2",
//         user_id : 1 
//        }]
//     })
//     console.log(res)
// }

findDetails();
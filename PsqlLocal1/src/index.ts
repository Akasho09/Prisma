import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() // equi to import mongose and mongoose.connect
// now we can acesses tables directly , even autocompletion is also bcx after npx prisma generate 
// node odules got added with all these things 


async function insertUser (username:string , password : string ) {
    try {
    const res = await prisma.user.create({
        data: {
            username : username,
            pasword : password   
    } , 
    select: ({
        pasword : false,
        id :  true ,
        username : true
    })
    })
    console.log(res)
   } catch {
    console.log("stfuuuuppp")
   }
}

async function updateUser(username:string , password : string , newUsername : string ) {
    await prisma.user.update({
        where: {
            username : username , 
            pasword : password
        }, 
        data: ({
            username : newUsername,
        })
    })
}

async function deleteUser (username : string , password : string ) {
   const data =  await prisma.user.delete ({
        where:{
            username : username ,
            pasword : password
        }
    })
    console.log("Deleted user is  " + data.username)
}



insertUser("KKK" , "ahmad@12");
// updateUser("KKK" , "ahmad@12" , "AhmaddMalikkkk")
// deleteUser("ahamd" , "ahmad@01234") ;
insertUser("KKK2" , "ahmad@12");


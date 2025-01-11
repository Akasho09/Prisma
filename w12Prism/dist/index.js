"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const akash = new client_1.PrismaClient();
function findDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield akash.todo.findMany({
            where: {
                user_id: 1
            },
            select: {
                title: true,
                user: true
            }
        });
        console.log(res);
    });
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

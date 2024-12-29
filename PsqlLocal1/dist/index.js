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
const prisma = new client_1.PrismaClient(); // equi to import mongose and mongoose.connect
// now we can acesses tables directly , even autocompletion is also bcx after npx prisma generate 
// node odules got added with all these things 
function insertUser(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.create({
                data: {
                    username: username,
                    pasword: password
                },
                select: ({
                    pasword: false,
                    id: true,
                    username: true
                })
            });
            console.log(res);
        }
        catch (_a) {
            console.log("stfuuuuppp");
        }
    });
}
function updateUser(username, password, newUsername) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.update({
            where: {
                username: username,
                pasword: password
            },
            data: ({
                username: newUsername,
            })
        });
    });
}
function deleteUser(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield prisma.user.delete({
            where: {
                username: username,
                pasword: password
            }
        });
        console.log("Deleted user is  " + data.username);
    });
}
insertUser("KKK", "ahmad@12");
// updateUser("KKK" , "ahmad@12" , "AhmaddMalikkkk")
// deleteUser("ahamd" , "ahmad@01234") ;
insertUser("KKK2", "ahmad@12");

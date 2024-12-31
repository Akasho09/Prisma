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
exports.createTodo = createTodo;
exports.updateTodo = updateTodo;
exports.getTodos = getTodos;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.todoTable.create({
                data: {
                    title: title,
                    description: description,
                    userId: userId,
                }
            });
            console.log("Creted Todo Sucessfully");
            return res;
        }
        catch (err) {
            console.log("Error occoured while creating a Todo" + err);
        }
    });
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
function updateTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.todoTable.update({
                where: {
                    id: todoId
                },
                data: {
                    done: true
                }
            });
            console.log("Updated Todo : ", res);
            return res;
        }
        catch (_a) {
            console.log("Error Updating Todo");
        }
    });
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
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todoTable.findMany({
            where: {
                userId: userId
            }
        });
        console.log(res);
    });
}
getTodos(2);

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "userTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- AlterTable
CREATE SEQUENCE todotable_id_seq;
ALTER TABLE "TodoTable" ADD COLUMN     "userId" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "done" SET DEFAULT false,
ALTER COLUMN "id" SET DEFAULT nextval('todotable_id_seq');
ALTER SEQUENCE todotable_id_seq OWNED BY "TodoTable"."id";

-- CreateTable
CREATE TABLE "UserTable" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "UserTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTable_username_key" ON "UserTable"("username");

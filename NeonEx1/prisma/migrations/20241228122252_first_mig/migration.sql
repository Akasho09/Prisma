-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "pasword" TEXT NOT NULL,
    "firstname" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "SNo" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT,
    "Done" BOOLEAN NOT NULL DEFAULT false,
    "User_id" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("SNo")
);

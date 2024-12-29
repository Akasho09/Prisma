-- CreateTable
CREATE TABLE "table1" (
    "col1" INTEGER NOT NULL,
    "col2" TEXT NOT NULL,

    CONSTRAINT "table1_pkey" PRIMARY KEY ("col1")
);

-- CreateTable
CREATE TABLE "TodoTable" (
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "id" INTEGER NOT NULL,

    CONSTRAINT "TodoTable_pkey" PRIMARY KEY ("id")
);

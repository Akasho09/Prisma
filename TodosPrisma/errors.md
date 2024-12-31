## npx prisma migrate dev --name updateTables
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "TodoDB", schema "public" at "localhost:5432"


Error: 
⚠️ We found changes that cannot be executed:

  • Step 0 Added the required column `userId` to the `TodoTable` table without a default value. There are 2 rows in this table, it is not possible to execute this step.

You can use prisma migrate dev --create-only to create the migration file, and manually modify it to address the underlying issue(s).
Then run prisma migrate dev to apply it and verify it works.


> set userId in TodoTable to @default(0) , for last inputs 
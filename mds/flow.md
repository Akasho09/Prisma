npm init -y
npm install prisma typescript tsx @types/node --save-dev
npx tsc --init
npx prisma init --datasource-provider postgresql
- rootdir -> ./src
  outdir -> ./dist 
- get neon url & slect specific provider 
- create models 
- npx prisma migrate dev --name init 
; To map your data model to the database schema, you need to use the prisma migrate CLI commands:

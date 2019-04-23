# Learn Koa.js 

Created self framework for create RESTful api with koa.js

Prerequisite :

1. [Docker](https://www.docker.com/)
2. [Node.js](https://nodejs.org/en/)

to run docker :
```
docker-compose up -d
```

to stop docker :
```
docker-compose down --rmi local
```

After running docker, edit some configuration on .env file
```
DB_DEV_HOST='localhost'
DB_DEV_PORT=3306
DB_DEV_DB='local_dev'
DB_DEV_USER='root'
DB_DEV_PASS=''
```
> you can change depends on your local database setting.
---
## Database

to do migration :
```
npx knex migrate:latest
```
to undo migration :
```
npx knex migrate:rollback
```


to run seeder :
```
npx knex seed:run
```

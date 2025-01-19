# Crude Server API

## Installation

```bash
git clone <repo_url>
cd crude-server
npm install
```

### create a .env file in crude-server

I'm using PostgresSQL, so put your database url in env file:
DATABASE_URL="postgresql://{username}:{password}@localhost:5432/mydb?schema=public"

#### Setup Database

docker-compose up -d (open docker desktop first before using this cmd)
npx prisma migrate dev --name init

##### Run server

npm run dev

###### API Endpoints

Create a Resource
POST http://localhost:5000/api/resources
{
    "name": "Example Resource",
    "type": "document",
    "description": "This is a sample resource."
}

List Resources
GET http://localhost:5000/api/resources?type=document

Get a Resource
GET http://localhost:5000/api/resources/{id}

Update a Resource
PUT http://localhost:5000/api/resources/{id}
{
    "name": "Gaming Laptop"
}

Delete a Resource
DELETE http://localhost:5000/api/resources/{id}

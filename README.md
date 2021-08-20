# Mongodb + Docker + NodeJS

> Creating a simple CRUD project with NodeJS using Docker and MongoDB to improve container skills ❤️ ❤️

### Prerequisites
- Docker


## Install & Test
**1. Clone this repository and Open project folder**
```bash
git clone git@github.com:alandev2/mongodb-docker-crud.git

cd mongodb-docker-crud
```

**2. Commands:**
```bash
make up # Start server
make down # Down server
make logs # To see logs in real-time
```

**3. Access the host and test if it works correctly**
> If the server is already started, you can see the following routers
```bash
[GET] http://localhost:3000/users # Get all users

[POST] http://localhost:3000/users # Add user
{ "name": string, "age": number }
```

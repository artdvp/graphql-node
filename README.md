# How to GraphQL 

## Tutorial GraphQL-Nodejs

### Overview

- `graphql-yoga`: Fully-featured GraphQL server with focus on easy setup, performance & great developer experience. It is built on top of [Express](https://expressjs.com/), apollo-server, graphql-js and more.
- [Prisma](https://www.prisma.io/): GraphQL database proxy that turns your database into a GraphQL API. This API provides powerful, realtime CRUD operations for your data model.
- `graphql-config` & [GraphQL CLI](https://github.com/graphql-cli/graphql-cli): Tooling to improve various GraphQL-related worfklows.
- GraphQL bindings: A convenient way of working with a GraphQL API. The binding generates dedicated JavaScript functions for each API operation.
- GraphQL Playground: “GraphQL IDE” that allows to interactively explore the functionality of a GraphQL API by sending queries and mutations to it. It’s somewhat similar to Postman which offers comparable functionality for REST APIs. Among other things, a GraphQL Playground…

    - … auto-generates a comprehensive documentation for all available API operations.
    - … provides an editor where you can write queries, mutations & subscriptions, with auto-completion(!) and syntax highlighting.
    - … lets you easily share your API operations.

### Installation

```sh
$ yarn init -y
$ yarn add graphql-yoga

```

### Run

```sh
$ node src/index.js
```

### View Type in GraphQL

```
{
  __schema {
    queryType {
      name
      fields {
        name
        description
      }
    }
  }
}
```

### Query

Query 1

```
query {
  info
}
```

Query 2

```
query {
  feed {
    id
    url
    description
  }
}
```

### Mutation

> Insert

```
mutation {
  post(
    url: "www.prisma.io",
    description: "Prisma turns your database into a GraphQL API"
  ) {
    id
  }
}
```

> Update

```
mutation {
  updateLink(
    id: "link-6",
  	description: "ddd",
    url: "www.bing.com"
  ) {
    id
    description
    url
  }
}
```

> Delete

```
mutation {
  deleteLink(
    id: "link-3"
  ) {
    id
    description
    url
  }
}
```

### Install Prisma CLI

```sh
$ npm install -g prisma

# because yarn has a problem for global
```

### Deploy Prisma

```
$ cd database
$ prisma deploy

$ prisma info
```

in Playground >> HTTP HEADERS

```
{
  "Authorization": "Bearer __TOKEN__"
}
```

After access GraphQL Then

>> Create 

```
mutation {
  createLink(data: {
    url: "www.prisma.io"
    description: "Prisma turns your database into a GraphQL API"
  }) {
    id
  }
}
```

>> Query

```
query	{
  links {
    id
    url
    description
    createdAt
  }
}
```

### Install prisma-binding

```
$ yarn add prisma-binding
```

### Downloading the Prisma database schema

```
$  touch .graphqlconfig.yml
```

### deploy

```
$ prisma deploy
```

### Install GraphQL CLI

```sh
$ npm install -g graphql-cli
```

### Run graphql

```sh
$ graphql playground
```

### Add Authen
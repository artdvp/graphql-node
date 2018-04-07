const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    updateLink: (root, args) => {
      let uplink = {
        id: `not found ${args.id}`,
        description: `not found ${args.id}`,
        url: `not found ${args.id}`
      };
      let index = links.findIndex(({ id }) => id === args.id);
      if (index !== -1) {
        links[index] = args;
        uplink = args;
      }
      return uplink;
    },
    deleteLink: (root, args) => {
      let dellink = {
        id: `not found ${args.id}`,
        description: `not found ${args.id}`,
        url: `not found ${args.id}`
      };
      let delIndex = links.findIndex(({ id }) => id === args.id);
      if (delIndex !== -1) {
        dellink = links[delIndex];
        links.splice(delIndex, 1);
      }
      return dellink;
    }
  }
  //   Link: {
  //     id: root => root.id,
  //     description: root => root.description,
  //     url: root => root.url
  //   }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));

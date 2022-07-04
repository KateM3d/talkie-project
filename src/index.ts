import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";

const resolvers = {
  Query: {
    hello: () => "World!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server is listening on ${url}`);
});

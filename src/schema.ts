import { ApolloServer, gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    posts: [Post!]!
  }

  type Mutation {
    postCreate(post: PostsInput!): PostPayload!
    postUpdate(postId: ID!, post: PostsInput!): PostPayload!
    postDelete(postId: ID!): PostPayload!
    signup(
      email: String!
      name: String!
      password: String!
      bio: String!
    ): AuthPayload!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    createdAt: String!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    profile: Profile!
    posts: [Post!]!
  }

  type Profile {
    id: ID!
    bio: String!
    user: User!
  }

  type UserError {
    message: String!
  }

  type PostPayload {
    userErrors: [UserError!]!
    post: Post
  }

  type AuthPayload {
    userErrors: [UserError!]!
    user: User
  }

  input PostsInput {
    title: String
    content: String
  }
`;

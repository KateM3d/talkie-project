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
      name: String!
      credentials: CredentialsInput
      bio: String!
    ): AuthPayload!
    signin(credentials: CredentialsInput): AuthPayload!
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
    token: String
  }

  input PostsInput {
    title: String
    content: String
  }

  input CredentialsInput {
    email: String!
    password: String!
  }
`;

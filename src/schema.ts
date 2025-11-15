import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    name: String!
    last_name: String!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    name: String!
    last_name: String!
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!
  }
`;

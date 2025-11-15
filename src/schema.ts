import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    name: String!
    last_name: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    userId: String!
    isNew: Boolean!
    description: String!
  }

  type Query {
    users: [User!]!
    products: [Product!]!
  }

  input CreateUserInput {
    name: String!
    last_name: String!
  }

  input CreateProductInput {
    userId: String!
    name: String!
    isNew: Boolean!
    description: String!
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!
    createProduct(data: CreateProductInput!): Product!
  }
`;

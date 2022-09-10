const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    addresses: String
    tags: [Tag]
    carts: Cart
    savedBooks: [Book]
  }

  type Product {
    id: ID!
    title: String
    description: String
    price: String
    discountPercentage: String
    rating: String
    brand: String
    category: String
    thumbnail: String
    images: [String]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Product {
    description: String
    image: String
    price: Number
    category: Category
    reviews: Review
  }

  type Review {
    title: String
    rating: Number
  }

  type Tag {
    tagId: ID!
    tagName: String
  }

  type Cart {
    cart_name: String
    products [Product]
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
    allProducts: [Product]
    # getProduct(id: ID!): Product
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;

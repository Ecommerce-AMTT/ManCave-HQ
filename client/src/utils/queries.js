import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }`

// get all products 
export const QUERY_ALL_PRODUCTS = gql`
  {
    allProducts {
      product {
        id
        title
        description
        price
        discountPercentage
        rating
        brand
        category
        thumbnail
        images
        stock
        category
        reviews {
          title
          rating
        }
      }
    }
  }
`;

// Get single product, given ID
export const QUERY_PRODUCT = gql`
  oneProduct($_id) {
    oneProduct(_id: $_id) {
      product {
        id
        title
        description
        price
        discountPercentage
        rating
        brand
        category
        thumbnail
        images
        stock
        category
        reviews {
          title
          rating
        }
      }
    }
  }
`;
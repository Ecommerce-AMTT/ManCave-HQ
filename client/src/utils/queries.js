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

//this needs to replace QUERY_ME
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
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
  query oneProduct($_id: String!) {
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
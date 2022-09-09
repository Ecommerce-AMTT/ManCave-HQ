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

// Get all products
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
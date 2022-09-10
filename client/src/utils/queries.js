import { gql } from "@apollo/client";

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
        brand
        category
        thumbnail
        images
      }
    }
  }
`;

// Get single product, given ID
export const QUERY_PRODUCT = gql`
  oneProduct($_id: String!) {
    oneProduct(_id: $_id) {
      product {
        productId
        name
        stock
      }
    }
  }
`;

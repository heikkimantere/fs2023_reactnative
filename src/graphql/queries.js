import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
  ) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
      edges {
        node {
          ownerAvatarUrl
          description
          language
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          fullName
          id
          url
        }
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      ownerAvatarUrl
      description
      language
      reviewCount
      ratingAverage
      forksCount
      stargazersCount
      fullName
      url
      reviews {
        edges {
          node {
            rating
            user {
              username
            }
            createdAt
            text
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

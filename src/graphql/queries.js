import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        cursor
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
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query repository($id: ID!, $first: Int, $after: String) {
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
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              username
            }
          }
          cursor
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const ME = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            rating
            id
            createdAt
            text
            repository {
              fullName
              id
            }
          }
        }
      }
    }
  }
`;

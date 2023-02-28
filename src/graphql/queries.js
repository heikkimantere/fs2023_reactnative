import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
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

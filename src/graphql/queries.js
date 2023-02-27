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
        }
      }
    }
  }
`;
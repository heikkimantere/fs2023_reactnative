import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        username
      }
      accessToken
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;

import { gql } from 'graphql-tag';

export const SIGN_IN = gql`
  mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation Mutation($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      user {
        username
      }
      repository {
        fullName
      }
      userId
      repositoryId
      rating
      createdAt
      text
    }
  }
`;
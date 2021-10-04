/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVoteTable = /* GraphQL */ `
  mutation CreateVoteTable(
    $input: CreateVoteTableInput!
    $condition: ModelvoteTableConditionInput
  ) {
    createVoteTable(input: $input, condition: $condition) {
      title
      category
      date
      url
      voteCount
      createdAt
      updatedAt
    }
  }
`;
export const updateVoteTable = /* GraphQL */ `
  mutation UpdateVoteTable(
    $input: UpdateVoteTableInput!
    $condition: ModelvoteTableConditionInput
  ) {
    updateVoteTable(input: $input, condition: $condition) {
      title
      category
      date
      url
      voteCount
      createdAt
      updatedAt
    }
  }
`;

export const incrementCount = /* GraphQL */ `
  mutation IncrementCount(
    $title: String!
  ) {
    incrementCount(title: $title) {
      title
    }
  }
`;


export const deleteVoteTable = /* GraphQL */ `
  mutation DeleteVoteTable(
    $input: DeleteVoteTableInput!
    $condition: ModelvoteTableConditionInput
  ) {
    deleteVoteTable(input: $input, condition: $condition) {
      title
      category
      date
      url
      voteCount
      createdAt
      updatedAt
    }
  }
`;

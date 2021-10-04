/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVoteTable = /* GraphQL */ `
  query GetVoteTable($title: String!) {
    getVoteTable(title: $title) {
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
export const listVoteTables = /* GraphQL */ `
  query ListVoteTables(
    $title: String
    $filter: ModelvoteTableFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVoteTables(
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        title
        category
        date
        url
        voteCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

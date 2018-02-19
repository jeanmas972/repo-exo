import  { gql }  from 'react-apollo';
// import  gql  from 'graphql-tag';

export default  gql`
{
  getUserTweets {
    _id
    text
    createdAt
    isFavorited
    favoriteCount
    user {
      username
      avatar
      lastName
      firstName
    }
  }
}
`;

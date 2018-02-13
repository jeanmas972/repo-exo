 import  { gql }  from 'react-apollo';
// import  gql  from 'graphql-tag';

export default  gql`
{
  getTweets {

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

// export default query;
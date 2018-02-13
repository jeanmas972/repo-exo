export default {
  PORT: process.env.PORT || 3333,
  DB_URL: `mongodb://localhost:27017/tweet`,
  GRAPHQL_PATH: '/graphql',
  JWT_SECRET: 'thisisasecret123',
  SUBSCRIPTIONS_PATH: '/subscriptions',
};

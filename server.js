const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.listen(4000, () => {
  console.log('server starting on localhost 4000')
});
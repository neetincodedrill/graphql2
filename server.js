const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema')

require('dotenv').config();
const app = express();

//connect to database
require("./gateway/db").connect();


app.use('/graphql',expressGraphQL({
   schema: schema,
   graphiql: true
}))

app.listen(5000,() => {
    console.log('Server is running')
})
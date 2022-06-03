const  { GraphQLSchema, GraphQLObjectType }  =  require('graphql');
const { bookQuery, bookMutation } = require('./gateway/book/schema')
const { authorQuery, authorMutation } = require('./gateway/author/schema')


const query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...bookQuery,
      ...authorQuery    
    }),
  });
  
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...bookMutation,
      ...authorMutation
    }),
  });

const schema = new GraphQLSchema({
    query,
    mutation
});
  
module.exports = schema;
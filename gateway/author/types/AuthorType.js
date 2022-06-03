const { GraphQLObjectType,GraphQLNonNull,GraphQLString, GraphQLID } = require('graphql')


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents a author of a book',
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
    })
  })

module.exports  = AuthorType
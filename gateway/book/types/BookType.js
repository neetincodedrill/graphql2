
const { GraphQLObjectType,GraphQLNonNull,GraphQLString, GraphQLID } = require('graphql')

const BookType = new GraphQLObjectType({
    name: "Book",
    description: "This respresent a book written by author",
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve: (source) => source._id,
      },
   name: { type: new GraphQLNonNull(GraphQLString) },
      authorName: { type: new GraphQLNonNull(GraphQLString) },
    }),
  });

module.exports = BookType
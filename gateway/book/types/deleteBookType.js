
const { GraphQLObjectType,GraphQLNonNull,GraphQLString } = require('graphql')

const DeleteBookType = new GraphQLObjectType({
    name: "Delete_Book",
    description: "Delete a Book from book list collection",
    fields: () => ({
      deleteMessage: { type: new GraphQLNonNull(GraphQLString) },
    }),
  });

module.exports = DeleteBookType
const { GraphQLObjectType,GraphQLNonNull,GraphQLString } = require('graphql')

const UpdateBookType = new GraphQLObjectType({
    name: "Update_Book",
    description: "Update a Book from book list collection",
    fields: () => ({
      updateMessage: { type: new GraphQLNonNull(GraphQLString) },
    }),
  });

module.exports = UpdateBookType
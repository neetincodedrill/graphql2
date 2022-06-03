const { GraphQLObjectType,GraphQLNonNull,GraphQLString } = require('graphql')

const DeleteAuthorType = new GraphQLObjectType({
    name: "Delete_Response",
    description: "This will delete the author from author collection",
    fields: () => ({
      deleteMessage: {
         type: new GraphQLNonNull(GraphQLString) 
        },
    }),
  });

module.exports  = DeleteAuthorType
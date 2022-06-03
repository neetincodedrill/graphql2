const { GraphQLObjectType,GraphQLNonNull,GraphQLString } = require('graphql')

const UpdateAuthorType = new GraphQLObjectType({
    name: "Update_Response",
    description: "This will update the author from author collection",
    fields: () => ({
        updateMessage: {
            type: new GraphQLNonNull(GraphQLString) 
        },
    }),
  });

module.exports  = UpdateAuthorType
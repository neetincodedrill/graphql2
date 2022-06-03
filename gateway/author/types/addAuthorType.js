const { GraphQLObjectType,GraphQLNonNull,GraphQLString } = require('graphql')

const AddAuthorType = new GraphQLObjectType({
    name: "Add_Response",
    description: "This will Add new author in author collection",
    fields: () => ({
        Message: {
            type: new GraphQLNonNull(GraphQLString) 
        },
    }),
  });

module.exports  = AddAuthorType
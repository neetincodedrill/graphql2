const { GraphQLObjectType,GraphQLNonNull,GraphQLString} = require('graphql');

const CreateBookType = new GraphQLObjectType({
    name: "Create_Book",
    description: "Creating a new Book",
    fields: () => ({
        successMessage: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

module.exports = CreateBookType
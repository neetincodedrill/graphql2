const {
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLString,
  } = require("graphql");
  
const AuthorType = require('./types/AuthorType')
const DeleteAuthorType = require('./types/DeleteAuthorType')
const UpdateAuthorType = require('./types/updateAuthorType')
const AddAuthorType = require('./types/addAuthorType')

const AuthorList = require('./resolve/authorListResolver')
const Author = require('./resolve/authorResolver')
const AddAuthor = require('./resolve/addAuthorResolver')
const UpdateAuthor = require('./resolve/updateAuthorResolver')
const DeleteAuthor = require('./resolve/deleteAuthorResolver')

const authorQuery = {
    authors: {
        type: new GraphQLList(AuthorType),
        description: "A list of all author",
        resolve: AuthorList,
    },
    author: {
        type: AuthorType,
        description: "A single author with specifc id",
        args: {
            id: { type: GraphQLID },
        },
        resolve: Author
        }         
    }

const authorMutation = {
    addAuthor: {
        type: AddAuthorType,
        description: "Add a author",
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: AddAuthor
    },
    updateAuthor: {
        type: UpdateAuthorType,
        description: "Update a author",
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: GraphQLString }
        },
        resolve: UpdateAuthor
    },
    deleteAuthor: {
        type: DeleteAuthorType,
        description: "Delete a Author",
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: DeleteAuthor
    }
}

module.exports = { authorQuery, authorMutation };
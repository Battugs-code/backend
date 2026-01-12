export const CommentDefs = `
type Comment {
    id: ID!
    user: String
    email: String
    movie_id:ID
    text: String
    date: String
  
}
    input CommentInput {
    movie_id:ID 
    text: String
    date: String
}


 `;
//  addComment(userId:ID!):Comment

export const CommentQuerieDefs = `
    comments: [Comment]
    filterUserComment(user:String!):[Comment]
 `;

export const commentMutationDefs = `
comment(input:CommentInput!):String
 `;

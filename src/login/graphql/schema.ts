export const allUsersDefs = `
  type User {
    username: String!
    password: String!
    email: String!
  }
`;
export const LoginDefs = `
  input Login {
    username: String!
    password: String!
  }
  input SignUp {
    username: String!
    email: String!
    password: String!
    passwordConfirm: String!
  }
  type allUsers {
    username: String!
    email: String
  }
`;
export const userMutationDefs = `
    createUser(input: SignUp!): String
    Login(input: Login!): String
`;
export const userQueryDefs = `
    allUsers: [allUsers]
`;

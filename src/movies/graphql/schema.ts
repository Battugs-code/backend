export const MovieDefs = `
  type Rating {
    rating: Float
    numReviews: Int
    meter: Int
  }

  type Tomatoes {
    viewer: Rating
    critic: Rating
    rotten: Int
    lastUpdated: String
    fresh: Int
  }

  type Awards {
    wins: Int
    nominations: Int
    text: String
  }

  input RatingInput {
    rating: Float
    numReviews: Int
    meter: Int
  }

  input TomatoesInput {
    viewer: RatingInput
    critic: RatingInput
    rotten: Int
    lastUpdated: String
    fresh: Int
  }

  input AwardsInput {
    wins: Int
    nominations: Int
    text: String
  }

  input addMovieInput {
    title: String
    year: Int
    plot: String
    genre: [String]
    runtime: Int
    cast: [String]
    relased: String
    languages: [String]
    directors: [String]
    awards: AwardsInput
    tomatoes: TomatoesInput
  }
  input deleteMovieInput {
    id: ID!
  }
  input searchMovieInput {
    title: String
    year: Int
    genres: [String]
  }
  type Movie {
    id: ID!
    title: String!
    year: Int
    plot: String

    genre: [String!]
    runtime: Int
    cast: [String!]

    relased: String
    languages: [String]
    directors: [String]
    awards: Awards
    tomatoes: Tomatoes
  }
`;
export const MovieQueryDefs = `
    movies:[Movie!]
    searchMovie(_id:ID!):Movie
`;
export const MovieMutationDefs = `
addMovie(input:addMovieInput!):Movie
deleteMovie(input:deleteMovieInput!):Movie
`;

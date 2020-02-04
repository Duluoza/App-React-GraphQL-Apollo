import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
  mutation addMovie($name: String!, $genre: String!, $rate: Int, @director: String, @watched: Boolean) {
    addMovie(name: $name, genre: $genre, rate: $rate, director: @director, watched: @watched) {
      name
    }
  }
`;
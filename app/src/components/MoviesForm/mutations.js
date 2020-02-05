import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
  mutation addMovie($name: String!, $genre: String!, $rate: Int, $directorId: ID, $watched: Boolean!) {
    addMovie(name: $name, genre: $genre, rate: $rate, directorId: $directorId, watched: $watched) {
      name
    }
  }
`;
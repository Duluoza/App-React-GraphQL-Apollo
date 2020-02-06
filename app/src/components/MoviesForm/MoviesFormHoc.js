import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { styles } from './styles';

import { addMovieMutation, updateMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';
import { directorsQuery } from "./queries";

const withGraphQL = compose(
    graphql(addMovieMutation, {
        props: ({ mutate }) => ({
            addMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{ query: moviesQuery }],
            }),
        }),
    }),
    graphql(updateMovieMutation, {
        props: ({ mutate }) => ({
            updateMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{ query: moviesQuery }],
            }),
        }),
    })
);

export default compose(withStyles(styles), withGraphQL, graphql(directorsQuery));

import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { styles } from './styles';

import { addMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';
import { directorsQuery } from "./queries";

const withGraphqlAdd = graphql(addMovieMutation, {
    props: ({ mutate }) => ({
        addMovie: movie => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }],
            // refetchQueries нужно для возврата всех режиссеров, чтобы добавленный режиссер сразу отобразился
        }),
    }),
});

export default compose(withStyles(styles), withGraphqlAdd, graphql(directorsQuery));

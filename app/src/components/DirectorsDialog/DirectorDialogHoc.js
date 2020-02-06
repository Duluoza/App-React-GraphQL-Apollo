import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteDirectorMutation } from './mutations';
import { directorsQuery } from '../DirectorsTable/queries';

const withGraphqlDelete = graphql(deleteDirectorMutation, {
    props: ({ mutate }) => ({
        deleteDirector: id => mutate({
            variables: id,
            refetchQueries: [{ query: directorsQuery }],
            // refetchQueries нужно для возврата всех режиссеров, чтобы добавленный режиссер сразу отобразился
        }),
    }),
});

export default compose(withGraphqlDelete);
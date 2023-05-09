import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });
  
  const repositories = data?.repositories?.edges?.map(edge => edge.node);

  return { repositories, loading, error };
};

export default useRepositories;
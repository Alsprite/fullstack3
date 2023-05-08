import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = async (variables) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });
  if (loading) return { repositories: [], loading: true };

  if (error) return { repositories: [], loading: false };

  console.log(data.repositories)
  return { repositories: data.repositories, loading };
};

export default useRepositories;
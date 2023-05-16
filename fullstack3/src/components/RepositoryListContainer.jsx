import RepositoryItem from './RepositoryItem';
import { FlatList } from 'react-native';

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  
    return (
      <FlatList
        data={repositoryNodes}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
      />
    );
  };
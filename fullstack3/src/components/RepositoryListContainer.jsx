import RepositoryItem from './RepositoryItem';
import { FlatList } from 'react-native';

const RepositoryListContainer = ({ repositories }) => {
    // const repositoryNodes = repositories
    //   ? repositories.edges.map((edge) => edge.node)
    //   : [];
  
    return (
      <FlatList
        data={repositories}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
      />
    );
  };

export default RepositoryListContainer
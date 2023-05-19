import { View, Text } from 'react-native'
import { useParams } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';

const RepositorySingle = () => {
    const { repositories, loading } = useRepositories();
    const { id } = useParams();
    console.log(repositories)
    const repository = repositories.find(repo => String(repo.id) === id);
    

    if (loading) {
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        );
      }
    
      if (!repository) {
        return (
          <View>
            <Text>Repository not found</Text>
          </View>
        );
      }
    
      return (
        <View>
          <Text>{repository.name}</Text>
          {/* Render the details of the repository */}
        </View>
    )
}

export default RepositorySingle
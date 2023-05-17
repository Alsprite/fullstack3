import { View, ActivityIndicator, StyleSheet } from 'react-native'
import RepositoryListContainer from './RepositoryListContainer'
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
  console.log("list: ", repositories)

  if (!loading) {
    return (
    <View>
      <RepositoryListContainer repositories={repositories}/>
    </View>
  )
  }
}

export default RepositoryList
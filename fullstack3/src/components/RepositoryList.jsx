import { View, StyleSheet } from 'react-native'
import RepositoryListContainer from './RepositoryListContainer'
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories } = useRepositories();
  console.log("list: ", repositories)

  return (
    <View>
      <RepositoryListContainer repositories={repositories}/>
    </View>
  )
}

export default RepositoryList
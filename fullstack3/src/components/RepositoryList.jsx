import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import repositories from '../../data'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  )
}

export default RepositoryList
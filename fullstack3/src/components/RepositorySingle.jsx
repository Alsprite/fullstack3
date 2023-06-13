import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { useParams } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import { styles as repoStyles } from '../repositoryItemStyles'
import * as Linking from 'expo-linking';

const styles = StyleSheet.create(repoStyles);

const RepositoryInfo = ({ repository, loading, id }) => {
    
    var star1 = repository.stargazersCount / 1000
    star1 = star1.toFixed(1)
    var fork1 = repository.forksCount / 1000
    fork1 = fork1.toFixed(1)

    const onPress = () => Linking.openURL(repository.url);

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
    <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
            <Image source={{uri: repository.ownerAvatarUrl }} style={styles.avatar}/>
        </View>
        <Text style={styles.nameText}>
            {repository.fullName}
        </Text>
    </View>
    <View style={styles.contentContainer}>
    
    <Text style={styles.descriptionText} color="textSecondary">
        {repository.description}
    </Text>
    <View style={styles.languageContainer}>
        <Text testID="language" style={styles.languageText}>
            {repository.language}
        </Text>
    </View>
    <Text>Stars: {star1 + 'k'}</Text>
    <Text>Forks: {fork1 + 'k'}</Text>
    <Text>Reviews: {repository.reviewCount}</Text>
    <Text>Rating: {repository.ratingAverage}</Text>
  </View>
  <View style={styles.githubContainer}>
        <Text onPress={() => onPress(repository.url)} style={styles.githubText}>
          Open in GitHub
        </Text>
      </View>
  </View>
    )
}

const ReviewItem = ({ review }) => {
  return (
    <View style={{ backgroundColor: 'white', padding: 15 }}>
      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>

        <View style={{ flexGrow: 1, flexShrink: 1 }}>
          <Text style={styles.nameText}>{review.user.username}</Text>
          <Text style={styles.dateText}>{review.createdAt.slice(0, 10)}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
}

const RepositorySingle = () => {
  const { repositories, loading } = useRepositories();
  const { id } = useParams();

  if (loading) {
    return (
      <Text>loading...</Text>
    )
  }

  const repository = repositories.find(repo => String(repo.id) === id);
  const reviews = repository && repository.reviews.edges.map((edge) => edge.node) || [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} loading={loading} id={id} />}
    />
  )
}

export default RepositorySingle
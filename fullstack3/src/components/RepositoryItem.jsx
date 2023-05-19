import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { styles as repoStyles } from '../repositoryItemStyles.js';
const styles = StyleSheet.create(repoStyles);

const RepositoryItem = ({ repository }) => {
    const {
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl,
      } = repository
      console.log(repository.id)
    var star1 = stargazersCount / 1000
    star1 = star1.toFixed(1)
    var fork1 = forksCount / 1000
    fork1 = fork1.toFixed(1)
    return (
        <View testID="repositoryItem">
    <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
            <Image source={{uri: ownerAvatarUrl }} style={styles.avatar}/>
        </View>
        <Text style={styles.nameText} fontWeight="bold" fontSize="subheading" numberOfLines={1}>
            {fullName}
        </Text>
    </View>
    <View style={styles.contentContainer}>
    
    <Text style={styles.descriptionText} color="textSecondary">
        {description}
    </Text>
    <View style={styles.languageContainer}>
        <Text testID="language" style={styles.languageText}>
            {language}
        </Text>
    </View>
    <Text>Stars: {star1 + 'k'}</Text>
    <Text>Forks: {fork1 + 'k'}</Text>
    <Text>Reviews: {reviewCount}</Text>
    <Text>Rating: {ratingAverage}</Text>
  </View>
  </View>
    )
}

export default RepositoryItem
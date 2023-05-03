import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { styles as repoStyles } from '../repositoryItemStyles.js';
const styles = StyleSheet.create(repoStyles);

const RepositoryItem = ({ item }) => {
    var star1 = item.stargazersCount / 1000
    star1 = star1.toFixed(1)
    var fork1 = item.forksCount / 1000
    fork1 = fork1.toFixed(1)
    return (
        <View>
    <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
            <Image source={{uri: item.ownerAvatarUrl }} style={styles.avatar}/>
        </View>
        <Text style={styles.nameText} fontWeight="bold" fontSize="subheading" numberOfLines={1}>
            {item.fullName}
        </Text>
    </View>
    <View style={styles.contentContainer}>
    
    <Text style={styles.descriptionText} color="textSecondary">
        {item.description}
    </Text>
    <View style={styles.languageContainer}>
        <Text style={styles.languageText}>
            {item.language}
        </Text>
    </View>
    <Text>Stars: {star1 + 'k'}</Text>
    <Text>Forks: {fork1 + 'k'}</Text>
    <Text>Reviews: {item.reviewCount}</Text>
    <Text>Rating: {item.ratingAverage}</Text>
  </View>
  </View>
    )
}

export default RepositoryItem
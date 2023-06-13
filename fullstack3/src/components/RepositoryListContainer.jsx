import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';

const RepositoryListContainer = ({ repositories, onEndReach }) => {
  const renderItem = ({ item }) => (
    <RepositoryItem repository={item} />
  );

  return (
    <FlatList
      data={repositories}
      renderItem={renderItem}
      onEndReached={onEndReach} // Pass the onEndReach prop here
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryListContainer;
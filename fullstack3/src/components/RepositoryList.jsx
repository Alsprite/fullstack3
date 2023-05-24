import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { IconButton, Menu, Searchbar } from 'react-native-paper';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RepositoryList = () => {
  const [visible, setVisible] = useState(false);
  const [orderBy, setOrderBy] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const { repositories, loading } = useRepositories();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const orderEnums = {
    latest: { orderBy: 'CREATED_AT' },
    rating: { orderBy: 'RATING_AVERAGE' },
    up: { orderDirection: 'ASC' },
    down: { orderDirection: 'DESC' },
  };

  const handleSort = (order) => {
    setOrderBy(order);
    setVisible(false);

    let sortedRepositories = [...repositories];

    switch (order) {
      case orderEnums.latest:
        sortedRepositories.sort((a, b) =>
          b.createdAt.localeCompare(a.createdAt)
        );
        break;
      case orderEnums.rating:
        sortedRepositories.sort(
          (a, b) => b.ratingAverage - a.ratingAverage
        );
        break;
      default:
        // No sorting, use the original order
        break;
    }

    if (
      order &&
      order.orderDirection === orderEnums.up.orderDirection
    ) {
      sortedRepositories.reverse();
    }

    setSortedRepositories(sortedRepositories);
  };

  const filterRepositories = (repos) => {
    return repos.filter((repo) =>
      repo.fullName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  };

  const sortedAndFilteredRepositories = filterRepositories(
    orderBy ? sortedRepositories : repositories
  );

  return (
    <View>
      <View
        style={{
          paddingTop: 0,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Searchbar
          style={theme.fontSizes.title}
          placeholder="Search"
          value={searchKeyword}
          onChangeText={(v) => setSearchKeyword(v)}
        />
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <IconButton
              icon="menu"
              size={25}
              onPress={() => setVisible(true)}
            />
          }
        >
          <Menu.Item disabled title="Select an item..." />
          <Menu.Item
            onPress={() => handleSort(orderEnums.latest)}
            title="Latest repositories"
          />
          <Menu.Item
            onPress={() => handleSort(orderEnums.down)}
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() => handleSort(orderEnums.up)}
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
      <RepositoryListContainer repositories={sortedAndFilteredRepositories} />
    </View>
  );
};

export default RepositoryList;
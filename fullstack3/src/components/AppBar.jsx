import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'
import { useApolloClient } from '@apollo/client';
import { useContext, useState } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 30,
    flexDirection: 'row',
  },
  tabText: {
    marginRight: 20,
    subheading: 16,
    color: 'white'
  }
})

const AppBar = () => {
  const [loggedIn, setloggedIn] = useState(false)
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    setloggedIn(false)
  }

  return (
  <View style={styles.container}>
    <ScrollView style={styles.scrollView} horizontal>
      <Link to="/"><Text style={styles.tabText}>Repositories</Text></Link>
      <Link to="/signin"><Text style={styles.tabText}>Sign in</Text></Link>
      {/* {loggedIn ? (
        <Link to="/"><Text style={styles.tabText} onPress={() => signOut()}>Sign out</Text></Link>
      ) : (
        <Link to="/signin" onPress={() => setloggedIn(true)}><Text style={styles.tabText} >Sign in</Text></Link>
      )} */}
    </ScrollView>
    </View>
  )
}

export default AppBar
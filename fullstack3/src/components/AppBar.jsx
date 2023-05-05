import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

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
    subheading: 16,
    color: 'white'
  }
})

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView style={styles.scrollView} horizontal>
      <Link to="/"><Text style={styles.tabText}>Repositories</Text></Link>
      <Link to="/signin"><Text style={styles.tabText}>Sign in</Text></Link>
    </ScrollView>
    </View>
}

export default AppBar
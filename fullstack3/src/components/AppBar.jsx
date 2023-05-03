import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

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
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable onPress={() => console.log("button was pressed")}><Text style={styles.tabText}>Repositories</Text></Pressable>
    </View>;
};

export default AppBar;
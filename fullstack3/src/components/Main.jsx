import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import { Route, Routes, Navigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/" element={<RepositoryList />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      {/* <Text>Rate Repository Application</Text> */}
      <RepositoryList />
    </View>
  );
};

export default Main;
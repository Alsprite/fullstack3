import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList'
import RepositorySingle from './RepositorySingle'
import AppBar from './AppBar'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Review from './Review'
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
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/repo/:id" element={<RepositorySingle />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<RepositoryList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </View>
  );
};

export default Main;
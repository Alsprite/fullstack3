import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

export default function App() {
  return (
    <View>
      <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
        <StatusBar style="auto" />
      </ApolloProvider>
      </NativeRouter>
    </View>
  );  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
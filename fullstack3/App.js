import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage);

export default function App() {
  console.log(Constants.manifest);
  return (
      <NativeRouter>
      <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <Main />
        <StatusBar style="auto" />
      </AuthStorageContext.Provider>
      </ApolloProvider>
      </NativeRouter>
  )
}
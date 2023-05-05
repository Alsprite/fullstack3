import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'

export default function App() {
  return (
    <View>
      <NativeRouter>
      <Main />
      <StatusBar style="auto" />
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
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Minmax from './Components/Minmax';

export default function App() {
  return (
    <View style={styles.container}>
      <Minmax minimo='1000' maximo='599' />
      <Image>

      </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

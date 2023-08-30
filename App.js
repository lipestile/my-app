import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Minmax from './Components/Minmax';
import Footer from './Components/Footer';
import MeuComponente from './Components/semana-2/MeuComponente';
import MeuComponente2 from './Components/semana-2/MeuComponente2';
import NumeroAleatório from './Components/semana3/Botão';
import Botão from './Components/semana3/Botão';
import Contador from './Components/semana3/Contador';
import Digiteseunome from './Components/semana3/Digiteseunome';

export default function App() {
  return (
    <View style={styles.container}>

      <Digiteseunome></Digiteseunome>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

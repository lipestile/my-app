import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Profile from './Components/semana5/Profile';
import PaginaLogin from './Components/semana6/PaginaLogin';


export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <Profile
        imgUri='https://www.fakepersongenerator.com/Face/female/female20161024753601562.jpg'
        genero='Feminino'
        nome='Felicia J Ochoa'
        email='aiyana1980@gmail.com'
        telefone='630-337-6439'
      /></>
    // <PaginaLogin/>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

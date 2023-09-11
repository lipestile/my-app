import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Profile from './Components/semana5/Profile';
import PaginaLogin from './Components/semana6/PaginaLogin';


export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <Profile
        imgUri='https://this-person-does-not-exist.com/img/avatar-gen49c651ed894a5240b849fdf4030b8740.jpg'
        genero='Man'
        nome='Mohamade aylui'
        email='mohamadeAyuli1999@gmail.com'
        telefone='666-789-3456'
      /></>
    // <PaginaLogin/>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

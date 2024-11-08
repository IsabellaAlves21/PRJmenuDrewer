import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pagina01 from './Pagina01';
import Pagina02 from './Pagina02';
import PaginaInicial from './PaginaInicial';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen  name='Home' component={PaginaInicial}/>
        <Drawer.Screen name='Opção 01' component={Pagina01}/>
        <Drawer.Screen name='Opção 02' component={Pagina02}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
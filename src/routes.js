import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import PLogin from './pages/PLogin';
import Inicio from './pages/Inicio';
import LoginMed from './pages/LoginMed';
import InicioMed from './pages/InicioMed';
import Home from './pages/Home';
import Grafico from './pages/Grafico';
import Atividades from './pages/Atividades';
import Detalhe from './pages/Detalhe';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>

                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="PLogin" component={PLogin}/>
                <AppStack.Screen name="LoginMed" component={LoginMed}/>
                <AppStack.Screen name="InicioMed" component={InicioMed}/>
                <AppStack.Screen name="Inicio" component={Inicio}/>
                <AppStack.Screen name="ECG" component={Grafico}/>
                <AppStack.Screen name="Atividades" component={Atividades}/>
                <AppStack.Screen name="Detalhe" component={Detalhe}/>
                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
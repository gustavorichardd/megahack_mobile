import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from './pages/login'
import Main from './pages/main'
import Content from './pages/content'
import Question from './pages/questions'


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Content" component={Content} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


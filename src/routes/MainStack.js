import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Home'} component={BottomTab} />
    </Stack.Navigator>
  );
};

export default MainStack;

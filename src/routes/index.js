import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MainStack from './MainStack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const AppNavContainer = () => {
  return (
    <>
      <NavigationContainer theme={theme}>
        <MainStack />
      </NavigationContainer>
    </>
  );
};

export default AppNavContainer;

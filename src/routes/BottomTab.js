import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactIcon from '../assets/icons/contacts.svg';
import SavedIcon from '../assets/icons/likes.svg';
import ChatIcon from '../assets/icons/chat.svg';
import ProfileIcon from '../assets/icons/profile.svg';
import Contacts from '../screens/Contacts';
import Saved from '../screens/Saved';
import Messaging from '../screens/Messaging';
import Profile from '../screens/Profile';

import {useRef} from 'react';

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function BottomTab() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          // Floating Tab Bar...
          tabBarStyle: {
            backgroundColor: '#F3F3F3',
            position: 'absolute',
            bottom: 0,
            // Max Height...
            height: 70,
            paddingBottom: 20,
          },
        }}>
        {
          // Tab Screens....
          // Tab ICons....
        }
        <Tab.Screen
          name={'Contacts'}
          component={Contacts}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                }}>
                <ContactIcon />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: -30,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
        <Tab.Screen
          name={'Search'}
          component={Saved}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                }}>
                <SavedIcon />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() + 10,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
        {
          // Extra Tab Screen For Action Button..
        }
        <Tab.Screen
          name={'Notifications'}
          component={Messaging}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                }}>
                <ChatIcon />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2.6,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
        <Tab.Screen
          name={'Settings'}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                }}>
                <ProfileIcon />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4.2,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth(),
          height: 2,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 70,
          // Horizontal Padding = 20...
          left: 50,
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </>
  );
}

function getWidth() {
  let width = Dimensions.get('window').width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

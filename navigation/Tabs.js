import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, icons} from '../constants';

// import from components
import Home from '../components/screen/HomeScreen';
import History from '../components/screen/HistoryScreen';
// import Liked from './components/screen/LikedScreen';
// import Message from './components/screen/MessageScreen';
import User from '../components/screen/UserScreen';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.tabNav,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.blue : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LikedScreen"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.like}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.blue : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.history}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.blue : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MessageScreen"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.envelope}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.blue : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={User}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.blue : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: COLORS.black,
    borderTopColor: 'transparent',
    height: 100,
  },
});

export default Tabs;

// import from react libs
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './navigation/Tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import from components
// import Home from './components/screen/HomeScreen';
// import History from './components/screen/HistoryScreen';
// import Liked from './components/screen/LikedScreen';
// import Message from './components/screen/MessageScreen';
// import User from './components/screen/UserScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Liked" component={Liked} />
//     <Tab.Screen name="History" component={History} />
//     <Tab.Screen name="Message" component={Message} />
//     <Tab.Screen name="User" component={User} />
//   </Tab.Navigator>;
// };

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />
        {/* <Stack.Screen name="User" component={User} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

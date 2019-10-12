import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import Home from './Home';
import Settings from './Settings';

import One from './One';
import Two from './Two';

import Ionicons from 'react-native-vector-icons/Ionicons';

// const TabNavigator = createBottomTabNavigator({
//   Home: Home,
//   Settings: Settings,
// });

const UpperScreens = {
  One: One,
  Two: Two,
};

const UpperNavigator = createMaterialTopTabNavigator(UpperScreens, {
  navigationOptions: ({navigation, screenProps}) => ({
    header: null,
    headerMode: 'none',
    // tabBarVisible: true,
    tabBarLabel: ({focused}) => {
      const {routeName, index} = navigation.state;
      switch (routeName) {
      }
      return <Text>routeName</Text>;
    },
  }),
  animationEnabled: false,
  swipeEnabled: true,
  lazy: true,
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: 'rgb(12,157,197)',
    inactiveTintColor: 'black',
    indicatorStyle: {
      backgroundColor: 'rgb(102,134,205)',
      height: 0,
    },
    labelStyle: {
      fontSize: 14 * 1, //ratio,
      color: 'tomato',
      backgroundColor: '#009432',
    },
    tabStyle: {
      height: 48,
      width: 110,
      alignItems: 'center',
      justifyContent: 'center',
    },
    style: {
      backgroundColor: 'white',
    },
    statusBarStyle: 'light-content',
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Settings: Settings,
    UpperNavigator: UpperNavigator,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const Route = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default createAppContainer(TabNavigator);

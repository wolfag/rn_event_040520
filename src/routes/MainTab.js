import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../commons/constants';
import PlusButton from '../components/PlusButton';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import PlusScreen from '../screens/PlusScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrderTab from './OrderTab';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Cart"
      tabBarOptions={{
        activeTintColor: COLORS.BLUE_OUTLINE,
        inactiveTintColor: COLORS.GRAY_LIGHT,
        showLabel: false,
        style: {
          backgroundColor: COLORS.WHITE,
          padding: 5,
          shadowOffset: {width: 10, height: 10},
          shadowColor: COLORS.BLACK_WEIGHT,
          shadowOpacity: 1,
          elevation: 30,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={PlusScreen}
        options={{
          tabBarIcon: () => <PlusButton />,
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;

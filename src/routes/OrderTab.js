import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import OrderAllScreen from '../screens/OrderAllScreen';
import OrderDoneScreen from '../screens/OrderDoneScreen';
import OrderObligationScreen from '../screens/OrderObligationScreen';
import OrderSubmittedScreen from '../screens/OrderSubmittedScreen';
import {COLORS} from '../commons/constants';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialTopTabNavigator();

function OrderTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => <Icon name="home" size={30} />,
      })}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: COLORS.BLUE_OUTLINE,
        inactiveTintColor: COLORS.BLACK_WEIGHT,
      }}>
      <Tab.Screen
        name="All"
        component={OrderAllScreen}
        options={{
          tabBarLabel: 'All',
        }}
      />
      <Tab.Screen
        name="Obligation"
        component={OrderObligationScreen}
        options={{
          tabBarLabel: 'Obligation',
        }}
      />
      <Tab.Screen
        name="Submitted"
        component={OrderSubmittedScreen}
        options={{
          tabBarLabel: 'Submitted',
        }}
      />
      <Tab.Screen
        name="Done"
        component={OrderDoneScreen}
        options={{
          tabBarLabel: 'Done',
        }}
      />
    </Tab.Navigator>
  );
}

export default OrderTab;

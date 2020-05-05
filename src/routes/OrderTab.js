import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import OrderAllScreen from '../screens/OrderAllScreen';
import OrderDoneScreen from '../screens/OrderDoneScreen';
import OrderObligationScreen from '../screens/OrderObligationScreen';
import OrderSubmittedScreen from '../screens/OrderSubmittedScreen';
import {COLORS} from '../commons/constants';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {commonStyles} from '../commons/styles';

const Tab = createMaterialTopTabNavigator();

function OrderTab() {
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <View style={[commonStyles.fullLineBetween, commonStyles.mh20]}>
        <Text style={styles.order}>Order</Text>
        <Icon name="search" size={25} />
      </View>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => <Icon name="home" size={30} />,
        })}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: COLORS.BLUE_OUTLINE,
          inactiveTintColor: COLORS.BLACK_WEIGHT,
          style: {backgroundColor: 'transparent'},
          labelStyle: {
            fontSize: 12,
          },
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  order: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OrderTab;

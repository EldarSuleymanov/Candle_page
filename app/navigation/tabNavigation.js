import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import styles from './styles';
import {Image} from 'react-native';
import Screen1 from '../views/screen1';
import Screen2 from '../views/screen2';
import Screen3 from '../views/screen3';
import Screen4 from '../views/screen4';

import CandleScreen from '../views/candle';

const TabMenu = createBottomTabNavigator();
const home = require('../images/home.png');
const profile = require('../images/profile.png');
const message = require('../images/message.png');
const file = require('../images/file.png');
const shop = require('../images/shop.png');

const TabMenuNavigator = () => (
  <TabMenu.Navigator
    initialRouteName='Candle'
    tabBarOptions={{
      style: styles.tabNavigartion,
    }}>
    <TabMenu.Screen
      name={'Screen1'}
      component={Screen1}
      options={{tabBarLabel: () => <Image source={home} />}}
    />
    <TabMenu.Screen
      name="Candle"
      component={CandleScreen}
      options={{tabBarLabel: () => <Image source={file} />}}
    />

    <TabMenu.Screen
      name="Screen2"
      component={Screen2}
      options={{tabBarLabel: () => <Image source={message} />}}
    />

    <TabMenu.Screen
      name="Screen3"
      component={Screen3}
      options={{tabBarLabel: () => <Image source={shop} />}}
    />

    <TabMenu.Screen
      name="Screen4"
      component={Screen4}
      options={{tabBarLabel: () => <Image source={profile} />}}
    />
  </TabMenu.Navigator>
);

export default TabMenuNavigator;

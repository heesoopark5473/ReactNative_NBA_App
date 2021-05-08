import React from 'react';

import { createStackNavigator }     from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './components/auth';
import News   from './components/news';
import Games  from './components/games';

const Stack = createStackNavigator();
const Tab   = createBottomTabNavigator();

const App = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="News"  component={ News }  />
            <Tab.Screen name="Games" component={ Games } />
        </Tab.Navigator>
    );
}

const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            headerMode="none"
        >
            <Stack.Screen name="Auth" component={ SignIn }  />
            <Stack.Screen name="App"  component={ App }     />
        </Stack.Navigator>
    );
}

export default RootNavigator;


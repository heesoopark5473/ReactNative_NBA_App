import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator }     from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './components/auth';
import News   from './components/news';
import Games  from './components/games';
import Article from './components/news/article';
import GamesArticle from './components/games/article';

import Logo from './utils/logo';

const Stack = createStackNavigator();
const Tab   = createBottomTabNavigator();

const headerConf = {
    headerStyle: 
        { backgroundColor: '#001338'},
        headerTintColor: 'white',
        headerTitle: Logo
}

const App = () => {
    return (
        <Tab.Navigator
            initialRouteName="News"
            tabBarOptions={{
                activeTintColor: '#fff',
                showLabel: false,
                activeBackgroundColor: '#00194b',
                inactiveBackgroundColor: '#001338',
                style: {
                    backgroundColor: '#001338',
                },
            }}
        >
            <Tab.Screen name="News"  component={ NewsStack }  
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="ios-basketball" size={25} color={'#fff'}/>
                    )
                }}
            />
            <Tab.Screen name="Games" component={ GamesStack } 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="tv-outline" size={25} color={'#fff'}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const NewsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={ headerConf }
        >
            <Stack.Screen name="News"       component={ News }/>
            <Stack.Screen name="Article"    component={ Article }/>
        </Stack.Navigator>
    );
}

const GamesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={ headerConf }
        >
            <Stack.Screen name="Games"      component={ Games }/>
            <Stack.Screen name="Article"    component={ GamesArticle }/>
        </Stack.Navigator>
    )
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


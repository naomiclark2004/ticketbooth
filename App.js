import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './SettingsScreen';
import Home from './HomeScreen';
import SearchScreen from './SearchScreen';
import FavScreen from './FavScreen';
import TicketScreen from './TicketScreen';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ tabBarShowLabel: false, tabBarIcon: () => <MaterialCommunityIcons  name="home-outline" size={20} />, tabBarActiveTintColor: "#355367", headerStyle: { backgroundColor: '#B9C2C9' }, tabBarStyle: { backgroundColor: '#B9C2C9' }}} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarShowLabel: false,  tabBarIcon: () => <MaterialCommunityIcons  name="magnify" size={20} />, tabBarActiveTintColor: "#355367", headerStyle: { backgroundColor: '#B9C2C9' }, tabBarStyle: { backgroundColor: '#B9C2C9' }, headerLeft: () => <IonIcon name="chevron-back" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Home')} />}} />
        <Tab.Screen name="Ticket" component={TicketScreen} options={{ tabBarShowLabel: false, tabBarIcon: () => <MaterialCommunityIcons name="ticket-outline" size={20} style={{transform: [{ rotate: '90deg'}]}}/>, tabBarActiveTintCor: "#355367", headerStyle: { backgroundColor: '#B9C2C9' }, tabBarStyle: { backgroundColor: '#B9C2C9' }, headerLeft: () => <IonIcon name="chevron-back" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Home')} /> }} />
        <Tab.Screen name="Favorites" component={FavScreen} options={{ tabBarShowLabel: false, tabBarIcon: () => <MaterialCommunityIcons  name="heart-outline" size={20} />, tabBarActiveTintColor: "#355367", headerStyle: { backgroundColor: '#B9C2C9' }, tabBarStyle: { backgroundColor: '#B9C2C9' }, headerLeft: () => <IonIcon name="chevron-back" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Home')} /> }} />
        <Tab.Screen name="My Account" component={SettingsScreen} options={{ tabBarShowLabel: false, tabBarIcon: () => <MaterialCommunityIcons  name="account-circle-outline" size={20} />,tabBarActiveTintColor: "#355367", headerStyle: { backgroundColor: '#B9C2C9' }, tabBarStyle: { backgroundColor: '#B9C2C9' }, headerLeft: () => <IonIcon name="chevron-back" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Home')} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );


}


export default App;
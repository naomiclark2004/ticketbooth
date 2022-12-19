import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import EventFav from './EventFav';
import PerformFav from './PerformFav';
import VenueFav from './VenueFav';

function FavScreen() {
    return (
        <Tab.Navigator screenOptions={{tabBarIndicatorStyle:{ backgroundColor: '#355367' } }}>
            <Tab.Screen name="Events" component={EventFav} />
            <Tab.Screen name="Performer" component={PerformFav} />
            <Tab.Screen name="Venue" component={VenueFav} />
        </Tab.Navigator>
    );
}

export default FavScreen;
import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import HelpScreen from './HelpScreen';
import TermsPage from './TermsPage';
import FormPage from './FormPage';
import Feedback from './FeedbackPage'

function SettingsScreen({ }) {
    return (
        <Tab.Navigator tabBar={() => null}>
            <Tab.Screen name="Setting" component={Settings} />
            <Tab.Screen name="Help" component={HelpScreen} />
            <Tab.Screen name="Terms of Use" component={TermsPage} />
            <Tab.Screen name="Sign In or Up" component={FormPage} />
            <Tab.Screen name="Feedback" component={Feedback} />
        </Tab.Navigator>
    )
}

function Settings({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const thumbColorOff = "white";
    const thumbColorOn = "#EDEDED"
    const trackColorOff = "#CB8E97"
    const trackColorOn = "#A7A7A7";
    const activeThumbColor = "white"
    return (
        <View>
            <View style={styles.box}>
                <Icon name='person-circle-outline' size={30} color='#355367'></Icon>
                <Text>Sign up or sign ins</Text>
                <Icon name="chevron-forward" size={20} color="#A7A7A7" onPress={() => navigation.navigate('Sign In or Up')} />
            </View>
            <View style={styles.box}>
                <Text>Favorites</Text>
                <Icon name="chevron-forward" size={20} color="#A7A7A7" onPress={() => navigation.navigate('Favorites')} />
            </View>
            <View style={styles.box}>
                <Text>Notification</Text>
                <Switch
                    trackColor={{ true: trackColorOff, false: trackColorOn }}
                    activeThumbColor={isEnabled ? thumbColorOn : thumbColorOff}
                    ios_backgroundColor="red"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.box}>
                <Text>Help</Text>
                <Icon name="chevron-forward" size={20} color="#A7A7A7" onPress={() => navigation.navigate('Help')} />
            </View>
            <View style={styles.box}>
                <Text>Terms of use</Text>
                <Icon name="chevron-forward" size={20} color="#A7A7A7" onPress={() => navigation.navigate('Terms of Use')} />
            </View>
            <View style={styles.box}>
                <Text>Feedback</Text>
                <Icon name="chevron-forward" size={20} color="#A7A7A7" onPress={() => navigation.navigate('Feedback')} />
            </View>
            <View >
                <Text style={{ textAlign: 'center', fontSize: '12px', paddingTop: '10px' }}> &#169; Ticketbooth, Inc. All Rights Reserved.</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '30px',
        borderBottomColor: '#A7A7A7',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    }

})

export default SettingsScreen;
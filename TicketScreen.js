import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function TicketScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
                <Icon name="ticket-confirmation" size={150} color='#CB8E97' style={{transform: [{ rotate: '90deg'}]}}></Icon>
                <Text style={{ fontSize: '20px', width: 300, textAlign: 'center' }}>Sign up or Sign in to View Your Order History</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', columnGap: '20px' }}>
                <Pressable style={{ backgroundColor: '#A7A7A7', borderRadius: 5, }} onPress={() => navigation.navigate('My Account')}>
                    <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, color: 'white' }}>Sign Up</Text>
                </Pressable>

                <Pressable style={{ backgroundColor: '#A7A7A7', borderRadius: 5, }} onPress={() => navigation.navigate('My Account')}>
                    <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, color: 'white' }}>Sign In</Text>
                </Pressable>
            </View>
        </View>

    )
}
export default TicketScreen;
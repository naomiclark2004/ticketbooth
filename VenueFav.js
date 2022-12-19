import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function VenueFav({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
                <Icon name="location" size={150} color='#CB8E97'></Icon>
                <Text style={{ fontWeight: 'bold', fontSize: '20px', width: '200px', textAlign: 'center', marginBottom: '20px' }}>You’re not tracking any Venues</Text>
                <Text style={{ fontWeight: 100, fontSize: '15px', width: '200px', textAlign: 'center' }}>Sign up or Sign in to view your favorites </Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', columnGap: '20px' }}>
                <Pressable style={{ backgroundColor: '#A7A7A7', borderRadius: 5, }} onPress={() => navigation.navigate('My Account')}>
                    <Text style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', paddingBottom: '15px', color: 'white'}}>Sign Up</Text>
                </Pressable>

                <Pressable style={{ backgroundColor: '#A7A7A7', borderRadius: 5, }} onPress={() => navigation.navigate('My Account')}>
                    <Text style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', paddingBottom: '15px', color: 'white'}}>Sign In</Text>
                </Pressable>
            </View>
        </View>

    )
}
export default VenueFav;
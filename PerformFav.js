import React, { useRef, useEffect } from 'react';
import { Text, View, Pressable, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function PerformFav({navigation}) {

    const anim = useRef(new Animated.Value(1));

    useEffect(() => {
        // makes the loop
        Animated.loop(
            // runs animations in a sequence
            Animated.sequence([
                // increase size
                Animated.timing(anim.current, {
                    toValue: 2,
                    duration: 1000,
                    useNativeDriver: true
                }),
                // decrease size
                Animated.timing(anim.current, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }),
            ])
        ).start();
    }, []);


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
                <Animated.View style={{ transform: [{ scale: anim.current}]}}>
                    <Icon name="heart" size={75} color="#CB8E97" />
                </Animated.View>
                <Text style={{ fontWeight: 'bold', fontSize: '20px', width: '200px', textAlign: 'center', marginBottom: '20px', marginTop: '30px'}}>You’re not tracking any Performers</Text>
                <Text style={{ fontWeight: 100, fontSize: '15px', width: '200px', textAlign: 'center'}}>Sign up or Sign in to view your favorites </Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', columnGap: '20px' }}>
                <Pressable style={{ backgroundColor: '#A7A7A7', borderRadius: 5, }} onPress={() => navigation.navigate('My Account')}>
                    <Text style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', paddingBottom: '15px', color: 'white' }}>Sign Up</Text>
                </Pressable>

                <Pressable style={{ backgroundColor: '#A7A7A7', borderRadius: 5, }} onPress={() => navigation.navigate('My Account')}>
                    <Text style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', paddingBottom: '15px', color: 'white'}}>Sign In</Text>
                </Pressable>
            </View>
        </View>

    )
}
export default PerformFav;
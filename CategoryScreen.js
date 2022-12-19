import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { useNavigation, CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SortByScreen from './SortByScreen';
const Tab = createMaterialTopTabNavigator();

function CategoryScreen() {
    return (
        <Tab.Navigator tabBar={() => null}>
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Sort" component={SortByScreen} />
        </Tab.Navigator>
    )
}

const handle = () => {
    navigation.navigate('Home', {screen: 'Homescreen'})
}


function Categories({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Icon name="chevron-back" size={20}  color="#A7A7A7" style={{ marginLeft: 10 }} onPress={handle} />
                <Text>Categories</Text>
            </View>

            <View style={styles.contain}>
                <View style={styles.box}>
                    <Text style={styles.text} onPress={() =>
                        navigation.navigate('Category', {
                            screen: 'Sort',
                            params: { type: 'sports' },
                        })
                    }>Sports</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text} onPress={() =>
                        navigation.navigate('Category', {
                            screen: 'Sort',
                            params: { type: 'concert' },
                        })
                    }>Concerts</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text} onPress={() =>
                        navigation.navigate('Category', {
                            screen: 'Sort',
                            params: { type: 'comedy' },
                        })
                    }>Comedy</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text} onPress={() =>
                        navigation.navigate('Category', {
                            screen: 'Sort',
                            params: { type: 'theater' },
                        })
                    }>Theater</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text} onPress={() =>
                        navigation.navigate('Category', {
                            screen: 'Sort',
                            params: { type: 'festival' },
                        })
                    }>Festivals</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text} onPress={() =>
                        navigation.navigate('Category', {
                            screen: 'Sort',
                            params: { type: 'family' },
                        })
                    }>Family</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10

    },

    contain: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'space-evenly',
        columnGap: 10,
        rowGap: 10,
        marginTop: 20,
    },


    box: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '35%',
        justifyContent: 'center',
        backgroundColor: '#CB8E97',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        padding: 20,
        width: 130,
        height: 130
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '10px'
    },

    text: {
        color: 'white',
        fontSize: 20
    }

})
export default CategoryScreen;

//https://api.seatgeek.com/2/events?venue.state=az&type=${input}&client_id=MzA1NjA0NDR8MTY2OTE1MTEyOS44OTg3MTI2
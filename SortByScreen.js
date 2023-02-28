import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
var moment = require('moment');

function SortByScreen({route, navigation}) {
    const[type, setType] = useState('')
    useEffect(() => {
        if(route.params!=undefined){
            var t = route.params.type
            setType(t)
        }
    })

    var id = 'MzA1NjA0NDR8MTY2OTE1MTEyOS44OTg3MTI2';
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
    const [error, setError] = useState('')


    async function fetchEvents(event) {
        var lower = event.toLowerCase();
        var re = lower.replaceAll(' ', '-');
        setInput(re)
    }

    useEffect(() => {
        var url = `https://api.seatgeek.com/2/events?venue.state=az&performers.slug=${input}&taxonomies.name=${type}&client_id=${id}`;
        fetch(url)
            .then(response => response.json())
            .then(
                (data) => {
                    if (data.events.length > 0) {
                        setOutput(data.events)
                    } else {
                        setOutput([])
                    }
                }
            )
    }, [type, input]);

    var t= type.charAt(0).toUpperCase() + type.slice(1);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Icon name="chevron-back" color="#A7A7A7" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Category', {screen: 'Categories'} )}/>
                <Text>{t}</Text>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.search}
                    onChangeText={fetchEvents}
                    // value={input}
                    placeholder="Search"
                />
                <Icon name="search-outline" size={30} />
            </View>
            <View>
                {output.length > 0 && output.map((item, index) => {
                    var image = item.performers[0].image;
                    var time = item.datetime_local;
                    time = moment(time).toString()
                    time = time.slice(0, 15)

                    // get date and cut of time to only show "dddd, MMMM Do YYYY"
                    return (
                        <View key={index} style={styles.contain}>
                            <Image style={styles.img} source={{ uri: image }}></Image>
                            <Text style={styles.text} onPress={() => Linking.openURL(item.url)}>{item.performers[0].name}{"\n"}<Text style={{ fontSize: '10px' }}>{time}</Text>{"\n"}<Text style={{ fontSize: '10px' }}>{item.venue.name}, {item.venue.state}</Text></Text>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        fontSize: '18px',
        fontWeight: 500,
        color: 'white',
        textAlign: 'center'
    },

    search: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    img: {
        width: 75,
        height: 75,
        borderRadius: '5px'
    },

    contain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 50,
        justifyContent: 'center',
        padding: 10,
    },

    text: {
        width: '40%',
        fontSize: '15px'
    }

})

export default SortByScreen;
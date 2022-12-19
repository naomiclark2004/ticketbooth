import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
var moment = require('moment');

function RecommendedScreen() {
    var id = 'MzA1NjA0NDR8MTY2OTE1MTEyOS44OTg3MTI2';
    const [output, setOutput] = useState([]);

    useEffect(() => {
        var url = `https://api.seatgeek.com/2/events?venue.state=az&client_id=${id}`;
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
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Icon name="chevron-back" color="#A7A7A7" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Home')} />
                <Text>Recommended</Text>
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
                            <Text style={styles.text} onPress={() => Linking.openURL(item.url)}>{item.performers[0].name}<br></br><span style={{fontSize: '10px'}}>{time}</span></Text>
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
export default RecommendedScreen;
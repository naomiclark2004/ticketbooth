import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HelpScreen({ navigation }) {
    const handle = () => {
        navigation.navigate('My Account', { screen: 'Setting' })
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Icon name="chevron-back" size={20} color="#A7A7A7" style={{ marginLeft: 10 }} onPress={handle} />
                <Text>Help</Text>
            </View>
            <View style={styles.box}>
                <Text>
                If you have any questions, comments, or complaints, please contact us at:
                <br></br><br></br>Ticket Booth, Inc.
                <br></br>(802) 644-8250
                <br></br>TicketBoothLegal@gmail.com
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },

    box: {
        display: 'flex',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '10px'
    },

})

export default HelpScreen;
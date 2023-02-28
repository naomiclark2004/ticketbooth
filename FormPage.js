import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function FormPage({ navigation }) {
    const handle = () => {
        navigation.navigate('My Account', { screen: 'Setting' })
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Icon name="chevron-back" size={20} color="#A7A7A7" style={{ marginLeft: 10 }} onPress={handle} />
                <Text>Sign In or Up</Text>
            </View>
            <View style={styles.top}>
                <Text>Sign Up</Text>
            </View>
            <View style={styles.box}>
                <Text>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="placeholder@gmail.com"
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Abcdefg123"
                />
                <Button title="Submit"></Button>
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
        flexDirection:'column',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center'
    },
    top: {
        display: 'flex',
        padding: 10,
        flexDirection:'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around'
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '10px'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    underline: {
        color: 'red'
    }
})

export default FormPage;
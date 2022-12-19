import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Feedback({ navigation }) {
    const handle = () => {
        navigation.navigate('My Account', { screen: 'Setting' })
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <IonIcon name="chevron-back" size={20} color="#A7A7A7" style={{ marginLeft: 10 }} onPress={handle} />
                <Text>Feedback</Text>
            </View>
            <View>
                <Text style={{textAlign:'center', marginTop:10}}>Your Feedback is appreciated. Selected which best represents your experience on your app.</Text>
                <View style={styles.box}>
                    <Icon name="emoticon-angry" size={30} color="#A7A7A7"></Icon>
                    <Icon name="emoticon-confused" size={30} color="#A7A7A7"></Icon>
                    <Icon name="emoticon-neutral" size={30} color="#A7A7A7"></Icon>
                    <Icon name="emoticon-happy" size={30} color="#A7A7A7"></Icon>
                    <Icon name="emoticon-excited" size={30} color="#A7A7A7"></Icon>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
    },

    box: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 10
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '10px'
    },

})

export default Feedback;
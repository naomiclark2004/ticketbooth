import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import CategoryScreen from './CategoryScreen';
import RecommendedScreen from './RecommendedScreen';

const game1 = { uri: "https://images.unsplash.com/photo-1480180566821-a7d525cdfc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1825&q=80" };
const game2 = { uri: "https://images.unsplash.com/photo-1521055170349-25f955971658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" };
const game3 = { uri: "https://images.unsplash.com/photo-1549956847-f77eb7058468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" };

function Home() {
    return (
        <Tab.Navigator tabBar={() => null}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Category" component={CategoryScreen} />
            <Tab.Screen name="Recommended" component={RecommendedScreen} />
        </Tab.Navigator>
    );
}


function HomeScreen({ navigation }) {

    var arr = ['https://www.w3schools.com/w3css/img_chicago.jpg', 'https://www.w3schools.com/w3css/img_ny.jpg', 'https://media.stubhubstatic.com/stubhub-v2-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,$w_280_mul_3,$h_180_mul_3/categories/259815/44792']
    const [index, setIndex] = useState(0);
    const [src, setSrc] = useState(0);

    const carouselInfinity = () => {
        // console.log(index)
        var s = arr[index]
        setSrc(s)

        if (index === arr.length - 1) {
            return setIndex(0)
        } else {
            return setIndex(index + 1)
        }

    }

    useEffect(() => {
        carouselInfinity()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => { carouselInfinity() }, 2000)
        return () => clearInterval(interval)
    })


    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image style={styles.img} source={{ uri: src }}></Image>
                </View>

                <View style={styles.linkList}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: '20px' }}>By Category</Text>
                        <Icon name="chevron-forward" size={20} onPress={() => navigation.navigate('Category', { city: 'Phoenix', state: 'AZ'})} />
                    </View>
                    <View style={styles.list}>
                        <View style={styles.box}>
                            <Text style={styles.linkText}>Sports</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.linkText}>Concerts</Text>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.linkText}>Comedy</Text>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.linkText}>Theater</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.linkText}>Festivals</Text>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.linkText}>Family</Text>
                        </View>
                    </View>

                    <View style={styles.title}>
                        <Text style={{ fontSize: '20px' }}>Recommended</Text>
                        <Icon name="chevron-forward" size={20} onPress={() => navigation.navigate('Recommended')} />
                    </View>
                    <View style={styles.list}>
                        <View style={styles.box}>
                            <ImageBackground style={styles.back} source={game1} resizeMode="cover" imageStyle={{ borderRadius: 5 }}>
                            </ImageBackground>
                        </View>
                        <View style={styles.box}>
                            <ImageBackground style={styles.back} source={game2} resizeMode="cover" imageStyle={{ borderRadius: 5 }}>
                            </ImageBackground>
                        </View>

                        <View style={styles.box}>
                            <ImageBackground style={styles.back} source={game3} resizeMode="cover" imageStyle={{ borderRadius: 5 }}>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        padding: 10,
    },

    img: {
        width: '100%',
        height: 200,
        borderRadius: '5px',
        marginBottom: 10
    },

    back: {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
    },

    linkList: {
        display: 'flex',
        rowGap: 10,
        marginTop: 10,
        marginBottom: 10,
        columnGap: 15
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        columnGap: '10px'
    },

    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15,
        marginTop: 15,
        flexWrap: 'wrap',
        rowGap: 30,
        columnGap: '10px'
    },

    box: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '30%',
        height: 80,
        backgroundColor: '#355367',
        color: 'white',
        borderRadius: 5,
        width: 90,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'

    },

    link: {
        display: 'flex',
        backgroundColor: '#B9C2C9',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 30,
    },

    linkText: {
        color: 'white'
    }

})
export default Home;
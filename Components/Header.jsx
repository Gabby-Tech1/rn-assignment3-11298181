import { Image, StyleSheet, Text, View } from 'react-native'
import Profile from '../assets/profile.png'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.title}>
        <View style={styles.text}>
            <Text style={styles.welcome}>Hello, Devs</Text>
            <Text style={styles.welcomeText}>14 tasks today</Text>
        </View>
        <Image
            style={styles.image}
            source={Profile}
        />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    welcome: {
        fontSize: 37,
        fontWeight: 'bold',
        color: '#000',
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: 'medium',
        color: '#000',
    },
})
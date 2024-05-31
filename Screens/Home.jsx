import { FlatList, Image, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Categories from '../Components/Categories';
import Task from '../Components/Task';
import Profile from '../assets/profile.png'
import Filter from '../assets/filter.png'
import Search from '../assets/search.png'



const Home = () => { 
  return (
    <View>
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
        <View style={styles.search}>
            <View style={styles.searchBox}>
                <Image
                    style={styles.searchIcon}
                    source={Search}
                 />
                <TextInput placeholder='Search' style={styles.searchInput}/>
            </View>
            <Image
                style={styles.filter}
                source={Filter}
            />

        </View>
        <View style={styles.tasks}>
            <Text style={styles.categories}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Categories/> 
            </ScrollView>
        </View>
        <View style={styles.tasks}>
            <Text style={styles.categories}>Ongoing Tasks</Text>
                <Task/>     
        </View>
    </View>
  )
}

export default Home

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
    search: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        margin: 20
    },
    searchIcon: {
        width: 30,
        height: 30,
    },
    searchBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        color: '#000',
        width: '80%',
        paddingLeft: 10,
    },
    filter: {
        width: 55,
        height: 55,
    },
    searchInput: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 10,
        fontSize: 20,
        width: '100%'
    },
    categories: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    }
    
})
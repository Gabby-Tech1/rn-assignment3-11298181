import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'


const Categories = () => {
  return (
    <View style={styles.category}>
        <View>
            <View style={styles.container}>
                <Text style={styles.categoryTitle}>Exercise</Text>
                <Text style={styles.categoryText}>12 Tasks</Text>
                <Image source={Image1} style={styles.taskImage}/>
            </View>
        </View>
        <View>
            <View style={styles.container}>
                <Text style={styles.categoryTitle}>Study</Text>
                <Text style={styles.categoryText}>12 Tasks</Text>
                <Image source={Image2} style={styles.taskImage}/>
            </View>
        </View>
        <View>
            <View style={styles.container}>
                <Text style={styles.categoryTitle}>Exercise</Text>
                <Text style={styles.categoryText}>12 Tasks</Text>
                <Image source={Image1} style={styles.taskImage}/>
            </View>
        </View>
        <View>
            <View style={styles.container}>
                <Text style={styles.categoryTitle}>Study</Text>
                <Text style={styles.categoryText}>12 Tasks</Text>
                <Image source={Image2} style={styles.taskImage}/>
            </View>
        </View>
        <View>
            <View style={styles.container}>
                <Text style={styles.categoryTitle}>Exercise</Text>
                <Text style={styles.categoryText}>12 Tasks</Text>
                <Image source={Image1} style={styles.taskImage}/>
            </View>
        </View>
        <View>
            <View style={styles.container}>
                <Text style={styles.categoryTitle}>Study</Text>
                <Text style={styles.categoryText}>12 Tasks</Text>
                <Image source={Image2} style={styles.taskImage}/>
            </View>
        </View>
        <View>
            <View style={styles.container}>
                <Text style={styles.categoryTitle}>Exercise</Text>
                <Text style={styles.categoryText}>12 Tasks</Text>
                <Image source={Image1} style={styles.taskImage}/>
            </View>
        </View>
        <View>
            <View style={styles.container}>
                <Text style={styles.categoryTitle}>Study</Text>
                <Text style={styles.categoryText}>12 Tasks</Text>
                <Image source={Image2} style={styles.taskImage}/>
            </View>
        </View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    category:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        gap: 23,
    },
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 200,
        height: 210,
        display: 'relative',
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    categoryText: {
        fontSize: 12,
        color: '#000'
    },
    taskImage: {
        display: 'absolute',
        width: 140,
        height: 140,
        top: 7,
        left: 15
    }
    
})
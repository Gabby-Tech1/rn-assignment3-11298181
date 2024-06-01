import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/cooking.png'
import Image4 from '../assets/eating.png'
import Image5 from '../assets/sleeping.png'
import Image6 from '../assets/game.png'
import Image7 from '../assets/coding.png'
import Image8 from '../assets/church.png'
import Image9 from '../assets/party.png'
import Image10 from '../assets/visit.png'


const category = [
    {
        title: 'Exercise',
        subtitle: '12 Tasks',
        image: Image1,
    },
    {
        title: 'Study',
        subtitle: '12 Tasks',
        image: Image2,
    },
    {
        title: 'Cook',
        subtitle: '9 Tasks',
        image: Image3,
    },
    {
        title: 'Eat',
        subtitle: '2 Tasks',
        image: Image4,
    },
    {
        title: 'Sleep',
        subtitle: '6 Tasks',
        image: Image5,
    },
    {
        title: 'Play Game',
        subtitle: '8 Tasks',
        image: Image6,
    },
    {
        title: 'Leetcode practice',
        subtitle: '7 Tasks',
        image: Image7,
    },
    {
        title: 'Church Service',
        subtitle: '13 Tasks',
        image: Image8,
    },
    {
        title: 'Party',
        subtitle: '1 Tasks',
        image: Image9,
    },
    {
        title: 'Visit',
        subtitle: '10 Tasks',
        image: Image10,
    }
]

const Categories = () => {
  return (
    
        <>
            {
                category.map((item, id)=>{
                    return (
                        <View style={styles.category} key={id}>
                            <View style={styles.container}>
                                <Text style={styles.categoryTitle}>{item.title}</Text>
                                <Text style={styles.categoryText}>{item.subtitle}</Text>
                                <Image source={item.image} style={styles.taskImage}/>
                            </View>
                        </View>
                    )
                })
            }
        </>
   
  )
}

export default Categories

const styles = StyleSheet.create({
    category:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15,
        gap: 10,
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
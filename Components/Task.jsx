import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const task = [
    {
        name: 'Mobile Development',
    },
    {
        name: 'Web Development',
    },
    {
        name: 'Python Lessons',
    },
    {
        name: 'Marchine Learning',
    },
    {
        name: 'Artificial Intelligence',
    },
    {
        name: 'CyberSecurity',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Analysis',
    },
]

const Task = () => {
  return (
    <View>
        {
            task.map((item, id)=>{
                return(
                <TouchableOpacity style={styles.task} key={id}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                )
            })
        }
        
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 10,
        height: 100,
        display: 'flex',
        
        
    },
    task: {
        display: 'flex',
        marginHorizontal: 20,
        gap: 10,
        flexDirection: 'column',
        marginBottom: 10
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        
    }
})
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = () => {
  return (
    <ScrollView>
        <View style={styles.task}>
        <View style={styles.container}>
            <Text style={styles.text}>Mobile Development</Text> 
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Web Development</Text> 
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Mobile Development</Text> 
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Web Development</Text> 
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Mobile Development</Text> 
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Web Development</Text> 
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Mobile Development</Text> 
        </View>
        </View>
    </ScrollView>
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
        flexDirection: 'column'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        
    }
})
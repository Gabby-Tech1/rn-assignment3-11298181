# STUDENT ID: 11298181

# *TASK* 
A brief description of each category used in this project. Here are some core components I used :

## *View:*
View component in React Native serves as a versatile container for building UI components 
and laying them out in a structured manner, while also providing options for styling, interactivity, and accessibility
## *USAGE*
```
  <View style={styles.searchcontainer}>
        <View style={styles.searchContent}>
            <Image source={Search} />
            <TextInput placeholder='Search' style={styles.searchInput}/>
        </View>
  </View>
```

## *Text:*
Text component in React Native is essential for presenting textual content in mobile applications, 
providing flexibility for styling, accessibility, and text manipulation to create engaging and user-friendly interfaces.
## *USAGE*
```
  <Text style={{fontSize: 24,fontWeight: 'bold', marginBottom: 15}}>
    Ongoing Task
  </Text>
```

## *ScrollView:*
ScrollView component in React Native is essential for creating scrollable views and handling large amounts of 
content in mobile applications, providing a seamless user experience for navigating through extensive lists or content areas.
## *USAGE*
```
  <ScrollView>
    <Home/>
    <StatusBar style="auto" />
  </ScrollView>
```

## *TextInput:*
TextInput component in React Native is essential for capturing user input and facilitating text entry in mobile applications, 
providing a flexible and customizable interface for handling various types of text input scenarios.
## *USAGE*
```
  <TextInput placeholder='Search' style={styles.searchInput}/>
```

## *Stylesheet:*
StyleSheet in React Native provides a convenient and efficient way to define and manage styles for components, improving code organization, 
readability, and performance.
## *USAGE*
```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});
```

## *FlatList:*
```
<FlatList
  horizontal
  data={categorydata}
  renderItem={categorysection}
  keyExtractor={item => item.id}
  showsHorizontalScrollIndicator={false}
/>
```

## *Image:*
Image component in React Native provides a versatile and efficient way to display images within mobile applications, 
supporting various image sources, resizing options, and accessibility features.
## *USAGE*
```
  <Image
    style={styles.searchIcon}
    source={Search}
  />
```

## SCREENSHOT

![WhatsApp Image 2024-06-02 at 10 24 09_f4ce36df](https://github.com/Gabby-Tech1/rn-assignment3-11298181/assets/149122552/3645b64a-8248-49ad-ad06-88eabeeb5247)
![WhatsApp Image 2024-06-02 at 10 30 37_e3ddb837](https://github.com/Gabby-Tech1/rn-assignment3-11298181/assets/149122552/c9d3e149-e38e-4169-bec8-1f4c13d7f498)



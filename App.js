import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Home from './Screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Home/>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});

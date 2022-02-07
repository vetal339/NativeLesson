import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image } from 'react-native';

export default function App() {
    const handleTextPress = () => console.log('presss')
    const handleButtonPress = () => Alert.alert("Native", "Main message", [
        {text: "yes", onPress: () => console.log('yes button')},
        {text: 'cansel', onPress: () => console.log('cansel button')}
    ])
    const handleButtonPress2 = () => Alert.prompt("Native", "Main message",text => console.log(text));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.text} onPress={handleTextPress} >Hello! {'\n'}brother</Text>
        <Button title={'click me'} onPress={handleButtonPress} />
        <Button title={'click2 me'} onPress={handleButtonPress2}/>

        <Image source={require('./assets/adaptive-icon.png')}/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop: 50,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
  },
    text: {
      alignSelf: 'center',
      color: 'red',
    },
});
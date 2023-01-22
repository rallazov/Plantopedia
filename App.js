
import { StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import * as Camera from 'expo-camera';
import * as Location from 'expo-location';
import React from 'react';
import { HomeScreen, ImageScreen } from '/components/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/**
 * App component that displays a button to select an image and renders the selected image
 */
 export default function App() {
    const [location, setLocation] = useState(null);
    const [selectedAsset, setSelectedAsset] = useState(null);
    const Stack = createStackNavigator();
    // const coords = location.coords


  /**
   * Asks for camera roll permission and launches the image picker
   */
  const pickImage = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setSelectedAsset(result);
    }
  };
  
  /**
   * Asks for camera permissions and launches the camera
   */
  const takePicture = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });
    const { uri } = await result.assets[0].getAssetInfoAsync();
     if (!result.canceled) {
    let selectedAsset = uri;
    setSelectedAsset(selectedAsset);
  }
  };
  const getLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need location permissions to make this work!');
      return;
    }
  
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
    return location;
  };
  
  
  
    useEffect(() => {
      getLocation().then(location => {
        setLocation(location);
      });
    }, []);
  
    return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} initialParams={{ selectedAsset: selectedAsset }}/>
      </Stack.Navigator>
       </NavigationContainer>      
  )};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageDisplay: {
    display: 'block',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingIndicator: {
    display: 'none',
  },
});

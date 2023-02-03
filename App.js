
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import * as Camera from 'expo-camera';
import * as Location from 'expo-location';
import React from 'react';
import { HomeScreen } from './components/HomeScreen.js';
import { ImageScreen } from './components/ImageScreen.js';
import { SearchScreen } from './components/SearchScreen.js';
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
    const { status } = await Camera.requestBackgroundPermissionsAsync();
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
    const { status } = await Camera.requestBackgroundPermissionsAsync();
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
    const { status } = await Location.requestBackgroundPermissionsAsync();
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
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />
          {/* <Stack.Screen name="Search" component={SearchScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  )
};

const styles = StyleSheet.create({


  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButton: {
    backgroundColor: '#9498bb',
    borderRadius: 50,
    padding: 20,
    margin: 5,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
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


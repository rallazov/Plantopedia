import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ImageScreenStyle.js';
import { TouchableOpacity } from 'react-native';


function ImageScreen({ route }) {
    const navigation = useNavigation();
    function takePicture() {
        <View>
        
        <Button title="Take a Picture" onPress={() => navigation.navigate('Image', { selectedAsset: selectedAsset })} />
        </View>
        
      }
      
      function pickImage() {
        <View>
             <Button title="Select Image" onPress={() => navigation.navigate('Image', { selectedAsset: selectedAsset })} />
        </View>
      }
      
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.roundButton} onPress={takePicture}>
                <Text style={styles.buttonText}>Take a Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton} onPress={pickImage}>
                <Text style={styles.buttonText}>Select Image</Text>
            </TouchableOpacity>
        </View>

    );
}
export { ImageScreen };
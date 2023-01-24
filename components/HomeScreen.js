import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './HomeScreenStyle.js';

function HomeScreen() {
    const navigation = useNavigation();
    const [selectedAsset, setSelectedAsset] = useState({});
    return (
        <View style={styles.container}>
            <Text>PLANTOPEDIA WELCOMES YOU!</Text>
            <Button title="Select Image" onPress={() => navigation.navigate('Image', {selectedAsset: selectedAsset})} />
            <Button title="Take a Picture"onPress={() => navigation.navigate('Image', {selectedAsset: selectedAsset})} />
        </View>
        
    );
}
export { HomeScreen};
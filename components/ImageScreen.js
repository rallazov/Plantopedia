import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ImageScreenStyle.js'; 

function ImageScreen({route}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button title="Back" onPress={() => navigation.goBack()} />
            <Image source={{ uri: route.params.selectedAsset.uri }} style={styles.image} />
        </View>
        
    );
}
export { ImageScreen };
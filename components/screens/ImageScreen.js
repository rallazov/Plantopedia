import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/ImageScreenStyles';

function ImageScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button title="Back" onPress={() => navigation.goBack()} />
            <Image source={{ uri: props.selectedAsset.uri }} style={styles.image} />
        </View>
        
    );
}
export { ImageScreen };
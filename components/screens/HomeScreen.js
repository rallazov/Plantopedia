import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/HomeScreenStyles';

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>PLANTOPEDIA WELCOMES YOU!</Text>
            <Button title="Select Image" onPress={() => navigation.navigate('Image')} />
            <Button title="Take Picture" onPress={() => navigation.navigate('Image')} />
        </View>
        
    );
}
export { HomeScreen};
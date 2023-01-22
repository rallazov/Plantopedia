import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


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

function ImageScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button title="Back" onPress={() => navigation.goBack()} />
            <Image source={{ uri: props.selectedAsset.uri }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export { HomeScreen, ImageScreen };





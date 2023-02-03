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
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Image" component={ImageScreen} />
                    <Stack.Screen name="Search" component={SearchScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    );
}
export { HomeScreen };
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionButton: {
      margin: 10,
      padding: 10,
      width: '70%',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      borderRadius: 5,
    },
    actionButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    actionButtonIcon: {
      marginRight: 10,
    },
    nearbyButton: {
      margin: 10,
      padding: 10,
      width: '70%',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      borderRadius: 5,
    },
    nearbyButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text>PLANTOPEDIA WELCOMES YOU!</Text>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Image', { selectedAsset: null })}
        >
        <Ionicons name="ios-image" size={24} color="white" style={styles.actionButtonIcon} />
        <Text style={styles.actionButtonText}>Select Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.actionButton}
        onPress={() => {
        takePicture();
        navigation.navigate('Image', { selectedAsset });
        }}
        >
        <Ionicons name="ios-camera" size={24} color="white" style={styles.actionButtonIcon} />
        <Text style={styles.actionButtonText}>Take a Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Search')}
        >
        <Ionicons name="md-search" size={24} color="white" style={styles.actionButtonIcon} />
        <Text style={styles.actionButtonText}>Search</Text>
        </TouchableOpacity>
        </View>
        );
        }
        
        export { HomeScreen };

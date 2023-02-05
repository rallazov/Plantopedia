import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    const result = await ImagePicker.openPicker({
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={30}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
          placeholder="Search"
        />
      </View>
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.imageContainer} />}
      </View>
      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <MaterialCommunityIcons
          name="camera"
          size={50}
          color="yellow"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fdd'
  },
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 1,
  },
  searchInput: {
    flex: 1,
    height: 45,
    padding: 10,
  },
  button: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'indigo',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'yellow'
  },
  imageContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 0,
  },
});

export default App;
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

      <TextInput
        style={styles.searchInput}
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
        placeholder="Search"
      />

      
        <TouchableOpacity style={styles.button} onPress={selectImage}>
        <MaterialCommunityIcons
          name="camera"
          size={50}
          color="yellow"
        />
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.searchContainer} />}
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:40,
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fdd'
  },
  searchContainer: {
    width: '100%',
    height: 50,
    padding: 10,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
  
  },
  searchInput: {
    height: 45,
    width: '100%',
    borderColor: 'yellow',
    borderWidth: 8,
    padding: 10,
    borderRadius: 25,
  },
  button: {
    marginTop: 660,
    padding: 30,
    backgroundColor: 'indigo',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'yellow'
  },
});


export default App;
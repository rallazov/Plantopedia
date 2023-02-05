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
      <View style={styles.headerContainer}>

        <View style={styles.headerLeftContainer}>
          <Text style={styles.headerText}>Plantopedia</Text>
        </View>

        <View style={styles.headerMiddleContainer}>
          {/* Place for logo */}
        </View>

        <View style={styles.headerRightContainer}>
          <View style={styles.headerProfileContainer}>
            <Text style={styles.headerProfileText}>Sign In</Text>
          </View>
        </View>
      </View>


      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={30}
          color="indigo"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search plants"
          autoFocus={true}
          underlineColorAndroid="transparent"
        />
      </View>



      <View style={styles.button}>
        <TouchableOpacity onPress={selectImage}>
          <MaterialCommunityIcons
            name="camera"
            size={50}
            color="yellow"
          />
        </TouchableOpacity>
        {image && (
          <Image
            source={{ uri: image }}
            style={styles.imageContainer}
          />
        )}
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fdd',
  },
  headerContainer: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    alignItems: 'top',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 20
  },
  headerLeftContainer: {
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold'
  },
  headerMiddleContainer: {
    alignItems: 'center',
    height: 80,
  },
  headerProfileContainer: {
    height: 30,
    width: 65,
    borderRadius: 20,
    backgroundColor: '#fdd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerProfileText: {
    fontSize: 18,
    color: 'green',
  },
  headerRightContainer: {
    alignItems: 'flex-end',
  },
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    paddingTop: 0,
    marginTop: 10,
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    padding: 0,
  },
  imageContainer: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    padding: 30,
    backgroundColor: 'indigo',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'yellow',
    position: 'absolute',
    bottom: 30,
    // left: 20,
    // right: 20,
  },
});





export default App;
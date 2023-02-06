import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Keyboard } from 'react-native';


const logo = require('./assets/PlantopediaLogo.png');

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [image, setImage] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSearch = () => {
    // Perform API call or any other action with searchTerm here
     console.log(searchTerm);
    Keyboard.dismiss();
  };
  

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
          <Image source={logo} style={styles.headerLogo} />
        </View>

        <View style={styles.headerRightContainer}>
          <TouchableOpacity style={styles.headerProfileContainer} onPress={() => setLoggedIn(!loggedIn)}>
            {loggedIn ? (
              <Text style={styles.headerProfileText}>User name or initials</Text>
            ) : (
              <Text style={styles.headerProfileText}>Sign In</Text>
            )}
          </TouchableOpacity>
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
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text style={styles.searchButton}>Search</Text>
        </TouchableOpacity>
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
    backgroundColor: '#A5CC94',
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
    color: '#005B00',
    fontWeight: 'bold'
  },
  headerMiddleContainer: {
    alignItems: 'center',
    height: 80,
  },
  headerLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    overflow: 'visible',
    marginTop: -10,
    backgroundColor: '#A5CC94'
  },
  headerProfileContainer: {
    height: 65,
    width: 65,
    borderRadius: 50,
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
  height: 40,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 25,
  borderWidth: 1,
  borderColor: 'indigo',
  alignItems: 'center',
  paddingHorizontal: 10,
  marginTop: 10
},
searchIcon: {
  padding: 7,
},
searchInput: {
  flex: 1,
  height: 40,
  fontSize: 18,
  paddingHorizontal: 10,
},
searchButton: {
  backgroundColor: '#CCFFE5',
  color: 'indigo',
  borderRadius: 10,
  height: 30,
  width: 80,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontWeight: '',
  fontSize: 18,
  overflow: 'hidden',
  
},
  imageContainer: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    padding: 20,
    backgroundColor: 'indigo',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'CCFFE5',
    position: 'absolute',
    bottom: 30,
    // left: 20,
    // right: 20,
  },
});





export default App;
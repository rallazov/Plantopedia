import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { SearchBar } from 'react-native-elements';


const MySearchBar = () => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
      </View>
    </View>
  );
};



function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const styles = StyleSheet.create({
    searchContainer: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      width: '90%',
      marginBottom: 10,
      borderRadius: 5,
      padding: 15,
    },
    searchButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: 15,
      width: '90%',
      borderRadius: 5,
      marginTop:10,
    },
  });
  const handleSearch = () => {
    // Perform search logic here with the searchQuery value
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <View>
      <MySearchBar />
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Enter plant name to search"
      />
      <TouchableOpacity 
      style={styles.searchButton} 
      onPress={handleSearch}
      activeOpacity={0.7}
      >
        <Text style={{ color: 'white' }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchScreen;

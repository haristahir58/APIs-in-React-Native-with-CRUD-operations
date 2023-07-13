import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, TextInput } from 'react-native';

const PhotoListScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditPhoto = (photo) => {
    navigation.navigate('EditPhoto', { photo });
  };

  const handleDeletePhoto = (photo) => {
    // Perform delete operation here
    console.log('Delete photo:', photo);

    // Update the photos state by removing the deleted photo
    setPhotos((prevPhotos) => prevPhotos.filter((item) => item.id !== photo.id));
  };

  const handleCreatePhoto = () => {
    navigation.navigate('CreatePhoto');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <Text>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <Text key={i} style={{ color: 'red' }}>
              {part}
            </Text>
          ) : (
            part
          )
        )}
      </Text>
    );
  };

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const PhotoItem = ({ photo }) => (
    <View style={styles.card}>
      <Image style={styles.thumbnail} source={{ uri: photo.thumbnailUrl }} />
      <Text style={styles.title}>{getHighlightedText(photo.title, searchQuery)}</Text>
      <Text style={styles.url}>{photo.url}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={() => handleEditPhoto(photo)} />
        <Button title="Delete" onPress={() => handleDeletePhoto(photo)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Create Photo" onPress={handleCreatePhoto} />
      </View>
      <Text style={styles.heading}>Photo List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredPhotos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PhotoItem photo={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  searchInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  url: {
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PhotoListScreen;

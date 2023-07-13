import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreatePhotoScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const handleCreatePhoto = () => {
    // Perform create operation here
    const newPhoto = {
      albumId: 1, // Assuming a fixed albumId for the example
      id: Math.floor(Math.random() * 100) + 1, // Generate a random id for the example
      title,
      url,
      thumbnailUrl,
    };

    console.log('Create photo:', newPhoto);

    // Navigate back to the PhotoListScreen after creating the photo
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Photo</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="URL"
        value={url}
        onChangeText={setUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Thumbnail URL"
        value={thumbnailUrl}
        onChangeText={setThumbnailUrl}
      />
      <Button title="Create" onPress={handleCreatePhoto} />
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
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default CreatePhotoScreen;

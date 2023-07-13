import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditPhotoScreen = ({ route }) => {
  const { photo } = route.params;
  const [title, setTitle] = useState(photo.title);
  const [url, setUrl] = useState(photo.url);
  const [thumbnailUrl, setThumbnailUrl] = useState(photo.thumbnailUrl);

  const handleSaveChanges = () => {
    // Perform update operation here with the updated values
    console.log('Save changes:', {
      id: photo.id,
      title,
      url,
      thumbnailUrl
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Edit Photo</Text>
      <Text>Title:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={title}
        onChangeText={setTitle}
      />
      <Text>URL:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={url}
        onChangeText={setUrl}
      />
      <Text>Thumbnail URL:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={thumbnailUrl}
        onChangeText={setThumbnailUrl}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

export default EditPhotoScreen;

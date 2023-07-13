import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoListScreen from './components/PhotoListScreen';
import CreatePhotoScreen from './components/CreatePhotoScreen';
import EditPhotoScreen from './components/EditPhotoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhotoList">
        <Stack.Screen
          name="PhotoList"
          component={PhotoListScreen}
          options={{ title: 'Photo List' }}
        />
        <Stack.Screen
          name="CreatePhoto"
          component={CreatePhotoScreen}
          options={{ title: 'Create Photo' }}
        />
        <Stack.Screen
          name="EditPhoto"
          component={EditPhotoScreen}
          options={{ title: 'Edit Photo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

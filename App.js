import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './tabs/HomeScreen'; 
import LandingPage from './tabs/LandingPage';
import tw from 'twrnc'; 
import CardDetailScreen from './tabs/CardDetailScreen';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'SF-Pro-Medium': require('./assets/fonts/SF-Pro-Rounded-Medium.otf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

 
  if (!fontLoaded) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-white`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Landing" component={LandingPage} /> 
      <Stack.Screen  name="Home"component={HomeScreen} options={{ title: 'Welcome',  headerTitleAlign: 'center', headerStyle: tw`bg-green-600`,headerTitleStyle: tw`text-white font-semibold`}} />
      <Stack.Screen  name="CardDetail"component={CardDetailScreen} options={{ title: 'Go back',  headerTitleAlign: 'center', headerStyle: tw`bg-green-600`,headerTitleStyle: tw`text-white font-semibold`}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

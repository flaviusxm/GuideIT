// tabs/LandingPage.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';

const LandingPage = ({ navigation }) => {

  return (
    <LinearGradient colors={['#B2E0C2', '#FFFFFF']} style={tw`flex-1`}>

      {/* Main Content Area */}
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-3xl font-bold text-white mb-6`}>
          Welcome to Guide<Text style={tw`font-bold text-yellow-300`}> IT</Text>!
        </Text>
        <Text style={tw`text-lg text-white mb-4`}>
          Choose an option to proceed:
        </Text>

        {/* Main Options */}
        <TouchableOpacity
          style={tw`bg-white p-4 rounded-full mb-4 w-64 shadow-lg`}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={tw`text-lg font-semibold text-center text-green-600`}>🚀 Get Started 🚀</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={tw`bg-white p-4 rounded-full mb-4 w-64 shadow-lg`}
          onPress={() =>alert('Feature Coming Soon!')}
        >
          <Text style={tw`text-lg font-semibold text-center text-green-600`}>💻 Full Stack 💻</Text>
        </TouchableOpacity>
        <TouchableOpacity
       style={tw`bg-white p-4 rounded-full mb-4 w-64 shadow-lg`}
          onPress={() => alert('Feature Coming Soon!')}
        >
          <Text style={tw`text-lg font-semibold text-center text-green-600`}>🐍 Python 🐍</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-white p-4 rounded-full mb-4 w-64 shadow-lg`}
          onPress={() => alert('Feature Coming Soon!')}
        >
          <Text style={tw`text-lg font-semibold text-center text-green-600`}>📱 Mobile 📱</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={tw`bg-white p-4 rounded-full mb-4 w-64 shadow-lg`}
          onPress={() => alert('Feature Coming Soon!')}
        >
          <Text style={tw`text-lg font-semibold text-center text-green-600`}>📊 Data Scientist 📊</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-white p-4 rounded-full mb-4 w-64 shadow-lg`}
          onPress={() =>alert('Feature Coming Soon!')}
        >
          <Text style={tw`text-lg font-semibold text-center text-green-600`}>⚙️ DevOps Engineer ⚙️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-white p-4 rounded-full mb-4 w-64 shadow-lg`}
          onPress={() => alert('Feature Coming Soon!')}
        >
          <Text style={tw`text-lg font-semibold text-center text-green-600`}>🎮 Game Developer 🎮</Text>
        </TouchableOpacity>

        {/* Other Options at the bottom */}
        <TouchableOpacity
         style={tw`bg-white p-4 rounded-full mb-4 w-64 shadow-lg`}
          onPress={() => alert('Feature Coming Soon!')}// Replace with navigation to another screen
        >
          <Text style={tw`text-lg font-semibold text-center text-green-600`}> 🛠️ Other Option 🛠️</Text>
        </TouchableOpacity>
      </View>
      <View
  style={tw`bg-white bg-opacity-80 rounded-t-lg p-6 w-11/12 mb-6 items-center border border-gray-300 shadow-lg absolute bottom-0 left-4`}>
  <Text style={tw`text-center text-sm text-gray-700`}>
    &reg; All rights reserved | Pirjoleanu Mihai Flavius
  </Text>
</View>
    </LinearGradient>
  );
};

export default LandingPage;

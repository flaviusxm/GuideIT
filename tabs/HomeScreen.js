import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc'; 
const cardsData = [
  { id: '1', title: 'Introduction', image: require('../assets/card_images/img1.jpeg') },
  { id: '2', title: 'Chapters', image: require('../assets/card_images/img2.jpeg') },
  { id: '3', title: 'Data Structures', image: require('../assets/card_images/img3.jpeg') },
  { id: '4', title: 'Algorithms', image: require('../assets/card_images/img4.jpeg') },
  { id: '5', title: 'System Design', image: require('../assets/card_images/img5.jpeg') },
  { id: '6', title: 'Operating Systems', image: require('../assets/card_images/img6.jpeg') },
  { id: '7', title: 'Databases & SQL', image: require('../assets/card_images/img7.jpeg') },
  { id: '8', title: 'Networking & Security', image: require('../assets/card_images/img8.jpeg') },
  { id: '9', title: 'Git Version Control', image: require('../assets/card_images/img9.jpg') },
  { id: '10', title: 'Soft Skills', image: require('../assets/card_images/img10.png') },
];

const HomeScreen = ({ navigation }) => {

  const animatedValues = cardsData.map(() => new Animated.Value(1));

  const animateCard = (index, toValue) => {
    Animated.spring(animatedValues[index], {
      toValue,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item, index }) => (
    <View style={tw`p-4 flex items-center`}>
      <TouchableOpacity
        onPressIn={() => animateCard(index, 0.95)}  // Scale down
        onPressOut={() => animateCard(index, 1)}   // Scale back to normal
        onPress={() => navigation.navigate('CardDetail', { cardId: item.id })}
      >
        <Animated.View style={[tw`rounded-lg overflow-hidden border-2 border-gray-300`, { transform: [{ scale: animatedValues[index] }] }]}>
        <ImageBackground
    source={item.image}
    style={tw`w-80 h-40 justify-center items-center`} // Center children within ImageBackground
    imageStyle={tw`rounded-lg`}
    resizeMode="cover"
  >
    <View style={tw`w-1/2`}>
      <Text style={tw`text-lg font-semibold text-white shadow-md p-2 bg-black bg-opacity-50 rounded-lg border-2 border-gray-300 text-center`}>
        {item.title}
      </Text>
    </View>
  </ImageBackground>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient
      colors={['#ffffff', '#66BB6A']}
      style={tw`flex-1 items-center justify-start p-5`}
    >
      <Text style={tw`text-2xl font-semibold text-gray-800 mb-2`}>
        Be your own Guide<Text style={tw`font-bold text-green-600`}>IT</Text>!
      </Text>
      <Text style={tw`text-base text-gray-600 text-center mb-5`}>
        An adventurous guide to landing a software job.
      </Text>
      <FlatList
        data={cardsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={tw`items-center`}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

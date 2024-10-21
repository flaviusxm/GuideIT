import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';
import Introduction from '../modules/Introduction/Introduction';
import Chapters from '../modules/Chapters/Chapters';
import SoftSkills from '../modules/SoftSkills/SoftSkills';
import OperatingSystems from '../modules/OS/OperatingSystems';
import NetworkingSec from '../modules/Networking&Sec/NetworkingSec';
import GitControl from '../modules/GitControl/GitControl';
import Algorithms from '../modules/Algorithms/Algorithms';
import DatabasesSql from '../modules/DBSQL/DatabasesSql';
import SystemDesign from '../modules/SystemDesign/SystemDesign';
const CardDetailScreen = ({ route }) => {
  const { cardId } = route.params;
  return (
    <LinearGradient 
      colors={['#ffffff', '#66BB6A']} 
      style={tw`flex-1`}
    >
      <ScrollView contentContainerStyle={tw`p-4 flex-grow`}>
        {cardId === '1' && <Introduction />}
        {cardId === '2' && <Chapters />}
        {cardId === '3' && <DataStructures_Arrays_Strings />}
        {cardId === '4' && <Algorithms/>}
        {cardId === '5' && <SystemDesign/>}
        {cardId === '6' && <OperatingSystems />}
        {cardId === '7' && <DatabasesSql />}
        {cardId === '8' && <NetworkingSec />}
        {cardId === '9' && <GitControl />}
        {cardId === '10' && <SoftSkills />}
        {!['1', '2', '3', '4', '5','6', '7', '8', '9', '10'].includes(cardId) && <Text style={tw`text-lg text-center`}>Card not found</Text>}
      </ScrollView>
    </LinearGradient>
  );
};

export default CardDetailScreen;

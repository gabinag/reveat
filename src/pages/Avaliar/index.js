import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {useState} from 'react';
import {styles} from './styles';


export default function Avaliar({navigation}) {
  const [rating, setRating] = useState(0)
  const handleStarPress = (value) => {
    setRating(value)
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={30} color="black" onPress={() => navigation.goBack()}/>
      </View>
      <View style={styles.wrap}>
        <View style={styles.starContainer}>
          {[1,2,3,4,5].map((index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleStarPress(index)}
              style={styles.starButton}
            >
              <FontAwesome
                name={index <= rating ? 'star' : 'star-o'}
                size={40}
                color={index <= rating ? '#FFD700' : '#D3D3D3'}
              />
            </TouchableOpacity>
          ))}
          <Text style={styles.ratingText}>{rating}/5</Text>
        </View>
        <TextInput placeholder='Deixe a sua opinião sobre o restaurante' multiline style={styles.input}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function BotaoAvaliar() {
  const navigation=useNavigation();
  return (
    <View>
        <TouchableOpacity style={styles.botaoAvaliar} onPress={()=>navigation.navigate('avaliar')}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    botaoAvaliar: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'orange',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
      },
      addIcon: {
        color: '#fff',
        fontSize: 28
      }
})
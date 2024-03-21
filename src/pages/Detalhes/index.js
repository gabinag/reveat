import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './styles';

export default function Detalhes() {
  const {params}=useRoute();
  const[restauranteDetail, setRestauranteDetail]=useState([]);

  useEffect(()=>{
    params&&setRestauranteDetail(params.restauranteDetail);
  }, [params])

  const navigation=useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={30} color="black" onPress={() => navigation.goBack()}/>
        <Text style={styles.tituloDetalhes}>{restauranteDetail.nome}</Text>
      </View>
      <Image source={{uri:restauranteDetail.image}} style={styles.imageDetalhes}
      />
      <View style={styles.mainInfo}>
        <View style={styles.containerInfo}>
          <Text>{restauranteDetail.categoria}</Text>
          <Text>{restauranteDetail.avaliacao}</Text>
        </View>
        <Text>{restauranteDetail.descricao}</Text>
        <Text>{restauranteDetail.endereco}</Text>
        <View>
          <Text>Reviews</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
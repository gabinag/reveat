import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {styles} from './styles';
import BotaoAvaliar from '../../components/BotaoAvaliar';

export default function Detalhes({navigation}) {
  const {params}=useRoute();
  const[restauranteDetail, setRestauranteDetail]=useState([]);

  useEffect(()=>{
    params&&setRestauranteDetail(params.restauranteDetail);
  }, [params])

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={30} color="black" onPress={() => navigation.goBack()}/>
        <Text style={styles.tituloDetalhes}>{restauranteDetail.nome}</Text>
        <FontAwesome name="bookmark-o" size={26} color="#FF6347" style={styles.bookmark}/>
      </View>
      <Image source={{uri:restauranteDetail.image}} style={styles.imageDetalhes}
      />
      <View style={styles.mainInfo}>
        <View style={styles.containerInfo}>
          <Text style={[styles.categoria, styles.commonStyle]}>{restauranteDetail.categoria}</Text>
          <View style={styles.containerReview}>
            <FontAwesome name="star" size={20} color="orange"/>
            <Text style={styles.avaliacao}>{restauranteDetail.avaliacao} (200)</Text>
          </View>
        </View>
        <Text style={styles.commonStyle}>{restauranteDetail.descricao}</Text>
        <Text style={styles.endereco}>{restauranteDetail.endereco}</Text>
        <View style={styles.containerReview}>
          <FontAwesome name="star" size={20} color="orange" />
          <Text style={styles.reviewsTitle}>Reviews</Text>
        </View>
      </View>
      <BotaoAvaliar/>
    </SafeAreaView>
  );
}
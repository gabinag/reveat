import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './styles';
import Header from '../../components/Header';
import React, {useState, useEffect} from 'react';
import {app} from '../../config/firebaseConfig'
import {getFirestore, getDocs, collection} from 'firebase/firestore'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BotaoAvaliar from '../../components/BotaoAvaliar';

export default function Home({item}) {
  const [restaurante, setRestaurante] = useState([])
  const db = getFirestore(app);
  
  const getRestauranteList=async()=> {
    const querySnapshot = await getDocs(collection(db, 'Restaurantes'))
    const list = []
    querySnapshot.forEach((doc) => {
        list.push({...doc.data(), id: doc.id })
    })
    setRestaurante(list)
  }

  useEffect(() => {
    getRestauranteList();
  }, [])

  const navigation=useNavigation();

  return (
    <SafeAreaView style={{height: '100%'}}>
      <Header/>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={restaurante}
          renderItem={({item}) => {
            return(
              <TouchableOpacity style={styles.card} onPress={()=>navigation.push('detalhes',
              {
                restauranteDetail:item
              })}>
                <View style={styles.content}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.img}
                  />
                  <View style={styles.container}>
                      <View style={styles.row}>
                          <Text style={styles.titulo}>{item.nome}</Text>
                          <FontAwesome name="star" size={20} color="orange" />
                          <Text style={styles.avaliacao}>{item.avaliacao}</Text>
                          <FontAwesome name="bookmark-o" size={24} color="#FF6347" style={styles.bookmark}/>
                      </View>
                      <Text style={styles.categoria}>{item.categoria}</Text>
                      <Text>{item.endereco}</Text>
                      <Text style={{display: 'none'}}>{item.descricao}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
        <BotaoAvaliar/>
    </SafeAreaView>
  );
}

import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './styles';
import Header from '../../components/Header';
import React, {useState, useEffect} from 'react';
import {app} from '../../config/firebaseConfig'
import {getFirestore, getDocs, collection} from 'firebase/firestore'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
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
    <SafeAreaView>
      <Header/>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={restaurante}
          renderItem={({item}) => {
            return(
              <TouchableOpacity style={styles.card} onPress={()=>navigation.push('Detalhes',
              {
                restaurante:item
              })}>
                <View style={styles.content}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.img}
                  />
                  <View style={styles.container}>
                      <View style={styles.row}>
                          <Text style={styles.titulo}>{item.nome}</Text>
                          <Text><FontAwesome name="star" size={20} color="orange" />{item.avaliacao}</Text>
                      </View>
                      <Text style={styles.categoria}>{item.categoria}</Text>
                      <Text>{item.endereco}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
    </SafeAreaView>
  );
}

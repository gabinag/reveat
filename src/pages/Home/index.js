import { SafeAreaView, FlatList } from 'react-native';
import Header from '../../components/Header';
import Restaurante from '../../components/Restaurante';
import React, {useState, useEffect} from 'react';
import {app} from '../../config/firebaseConfig'
import {getFirestore, getDocs, collection} from 'firebase/firestore'

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

  return (
    <SafeAreaView>
      <Header/>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={restaurante}
          renderItem={({item}) => {
            return(
            <Restaurante 
              imageUri={item.image}
              titulo={item.nome}
              categoria={item.categoria}
              avaliacao={item.avaliacao}
              endereco={item.endereco}
            />
            )
          }}
        />
    </SafeAreaView>
  );
}


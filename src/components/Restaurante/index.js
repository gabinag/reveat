import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default function Restaurante(props) {

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image
          source={{uri: props.imageUri}}
          style={styles.img}
        />
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.titulo}>{props.titulo}</Text>
                <Text><FontAwesome name="star" size={20} color="orange" />{props.avaliacao}</Text>
            </View>
            <Text style={styles.categoria}>{props.categoria}</Text>
            <Text>{props.endereco}</Text>
        </View>
      </View>
    </View>
  );
}
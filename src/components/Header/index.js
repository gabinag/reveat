import { View, Image, StyleSheet, TextInput} from 'react-native';
import logo from '../../../assets/reveat-logo.png'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}/>
      <TextInput style={styles.input} placeholder='Buscar restaurante'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:  'row',
        paddingLeft: 10,
        paddingBottom: 15,
        paddingTop: 5,
    },
    logo: {
        width: 40,
        height: 40
    },
    input: {
      backgroundColor: '#fff',
      width: 285,
      borderRadius: 30,
      fontSize: 16,
      marginLeft: 10,
      paddingLeft: 10
    }
});
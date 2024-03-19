import { View, Image, StyleSheet } from 'react-native';
import logo from '../../../assets/reveat-logo.png'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingBottom: 5,
    },
    logo: {
        width: 40,
        height: 40
    }
});
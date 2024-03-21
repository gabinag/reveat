import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
    },
  tituloDetalhes: {
    fontSize: 20, 
    fontWeight: '500',
    paddingLeft: 12
  },
  imageDetalhes: {
    width: "100%", 
    height: 200
  },
  mainInfo: {
    padding: 10,
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export {styles}
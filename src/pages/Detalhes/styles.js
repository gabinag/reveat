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
  bookmark: {
    position: 'absolute',
    right: 18
  },
  imageDetalhes: {
    width: "100%", 
    height: 200
  },
  mainInfo: {
    padding: 10,
    height: '58%'
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  commonStyle: {
    fontSize: 16
  },
  categoria: {
    color: '#FF6347',
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  endereco: {
    fontWeight: '500',
    paddingTop: 8
  },
  containerReviewTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 20,
    paddingLeft: 5
  }
});

export {styles}
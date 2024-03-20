import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: 340,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  container: {
    paddingLeft: 10
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 5
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 100
  },
  titulo: {
    fontSize: 16,
    fontWeight: '500',
    paddingRight: 10
  },
  categoria: {
    color: '#FF6347',
    fontWeight: '500'
  }
});

export {styles}
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10
    },
wrap: {
    padding: 15
},
starContainer: {
    flexDirection: 'row',
    marginBottom: 10
},
starButton : {
    marginHorizontal: 2
},
ratingText: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10
},
input: {
    backgroundColor: '#fff',
    height: 200,
    width: '100%',
    borderRadius: 10,
    textAlignVertical: 'top',
    padding: 15,
    fontSize: 16,
    marginBottom: 20
},
button: {
    backgroundColor: 'orange',
    borderRadius: 30,
    alignItems: 'center',
    padding: 10
},
textButton: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500'
}
});

export {styles}
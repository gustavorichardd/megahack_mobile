import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0b344c'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  mapContainer: {
    width: 300,
    height: 100,
    marginBottom: 5,
  },
  brasilMap: {
    height: '100%',
    width: '100%',
  },
  questionTitle: {
    height: '10%',
    // borderColor: '#fff',
    // borderWidth: 1,
  },
  questionTitle2: {
    height: '12%',
    alignItems: 'center',
    marginTop: 20,
  },
  questionTitleText: {
    fontSize: 25,
    color: '#143b52',
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingRight: 40,
  },

  questionTitleText2: {
    fontSize: 25,
    color: '#143b52',
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },

  questionTitleText3: {
    fontSize: 15,
    color: '#143b52',
    fontWeight: 'bold',
    
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
  },
  mapContainer2: {
    width: 350,
    height: 350,
    marginBottom: 0,
  },

  btnInov: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#51bbc0',
    backgroundColor: '#355467',
    width: 170,
    height: 35,
    paddingLeft: 30,
    paddingTop: 5,
    borderColor: '#fff',
    borderRadius: 20,
    marginRight: 5,
  },
  btnInov2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#355467',
    width: 170,
    height: 35,
    paddingLeft: 20,
    paddingTop: 5,
    
  },

  cotFor: {
    flexDirection: 'row',
    marginBottom: 30,
    borderRadius: 20,
    alignItems: 'center',
    
  },

})
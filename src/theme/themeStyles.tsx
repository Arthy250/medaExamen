import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'white',
  },
  contenido: {
    padding: 30,
    justifyContent: 'center',
  },
  button: {
    width: 150,
    backgroundColor: '#3c77e3',
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  textInput: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    marginVertical: 15,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15
  },
});

export const loginStyles = StyleSheet.create({
  contenedorBotones: {
    paddingBottom: 20,
    gap: 15,
    flexDirection: 'row',
  },
  postsContenedor: {
    alignItems: 'center',
  },
  buttonPosts: {
    width: 150,
    borderWidth: 1,
    borderColor: '#3c77e3',
    borderRadius: 30,
    padding: 10,
  },
  buttonPostsText: {
    color: '#3c77e3',
  },
  buttonLogin:{
    marginTop:15,
    alignItems: 'flex-end'
  }
});

export const empleadosStyle = StyleSheet.create({
    cardEmpleado:{
        backgroundColor:'#dadada',
        padding: 10,
        marginBottom: 15
    }
})

export const modalStyles = StyleSheet.create({
  contenedor:{
    flex:1
  },
  formulario:{
    paddingHorizontal:20
  },
  titulo:{
    fontSize:20,
    textAlign:'center',
    marginBottom: 30
  },
  label:{
    textAlign:'left'
  },
  botonesContenedor:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop:30
  },
  button:{
    backgroundColor: '#8a52ec',
  }
})

export const postsStyles = StyleSheet.create({
  postCard:{
    backgroundColor:'#f2f2f2',
    marginBottom:15,
    padding:15
  },
  titulo:{
    color:'black',
    fontSize:16,
    fontWeight: '600',
    marginBottom:5
  },
  content:{
    color:'black',
    fontSize:12
  }
})

export const usuarioStyles = StyleSheet.create({
  item:{
    flex:1,
    backgroundColor:'#bbeae4',
    padding:15,
    margin:8
  },
  textItem:{
    textAlign: 'center',
    color:'black',
  },
  cardText:{
    padding: 10,
    backgroundColor:'#bbeae4',
    marginBottom:10
  }
})
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#68d2df'
    },
    containerInput:{
        padding:25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    containerList:{
        paddingHorizontal:25,
    },
    textInpput:{
        borderColor:"black",
        borderBottomWidth:1,
        marginBottom:10,
        height:40,
        width:'70%',
        fontSize:14,
        color:'#212121'
    },
    textList:{
        fontSize:24,
        color:'#212121',
        marginBottom:10,
    },
    textCenter:{
        fontSize:20,
    },
    modalContainerContent:{
        width:'80%',
        height:'30%',
        borderRadius:4,
        elevation:4,
        justifyContent:'center',
        marginLeft:40,
        marginTop:200,
        shadowOffset:{width:1, height:1},
        shadowColor:'black',
        shadowOpacity:0.2,
    },
    modalTitle:{
        fontSize:11,
        color:'#212121',
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
    },
    modalContent:{
        paddingHorizontal:25,
        justifyContent:'center',
    },
    modalContentText:{
        fontSize:14,
        color:'#212121',
        fontWeight:'bold',
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
    },
    modalButton:{
        marginVertical:10,
        paddingHorizontal:25,
        justifyContent:'center',
    }
  })
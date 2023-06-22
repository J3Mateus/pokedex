import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create(
    {
        container :{
            backgroundColor:"#FFFFFF",
            width: 108,
            height: 104,
            marginLeft:10,
            marginTop:10,
            borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            overflow:"hidden",
            elevation: 10,
        },
        subContainer :{
            backgroundColor:"#EFEFEF",
            marginTop:"10%",
            height:"40%",
            borderTopEndRadius:5,
            borderTopStartRadius:5,
            width:"100%",
            bottom:0,
            position:"absolute"
        },
        imageContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
            marginBottom:25,
            zIndex: 10, // Adicionado o zIndex
          },
        labelCode:{
            textAlign:"right",
            marginRight:10,
            marginTop:5,
        },
        labelName :{
            marginTop:10,
            textAlign:"center"
        },
        image:{
            height:80,
            width:80,
            marginBottom:10,
            justifyContent:"center",
            alignItems:"center",
         
        }
    }
)

export  default CardStyle
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
            backgroundColor:"#E0E0E0",
            marginTop:"40%",
            borderTopEndRadius:10,
            borderTopStartRadius:10,
            width:"100%"
        },
        imageContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
            marginBottom:25,
            zIndex: 10, // Adicionado o zIndex
          },

        image:{
            zIndex:30,
            height:120,
            width:120
        }
    }
)

export  default CardStyle
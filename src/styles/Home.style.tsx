import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    container:{
        backgroundColor:"#DC0A2D",
        width:"100%",
        height:"100%"
    },
    cardRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        height:30,
        marginTop:40,
        marginBottom:30
    },
    subContainer:{
        flex:1,
        backgroundColor:"white",
        marginTop:15,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        height:"100%",
        borderRadius:10,
        overflow:"hidden"
    }
})

export default HomeStyle
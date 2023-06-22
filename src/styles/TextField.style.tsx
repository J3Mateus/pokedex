import { StyleSheet } from "react-native";

const TextFieldStyle = StyleSheet.create({
    TextField:{
        flex:1,
        backgroundColor:"white",
        height:40,
        marginLeft:10,
        marginRight:10,
        borderRadius:20,
        paddingLeft:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
})

export default TextFieldStyle
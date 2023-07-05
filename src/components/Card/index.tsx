import { StyleProp,View,TouchableOpacity, TextStyle,Text,Image } from "react-native";
import CardStyle from "../../styles/Card.style";

interface IProposCard{
    code : string 
    name : string
    url : string 
    style? : StyleProp<TextStyle>
    onPress : ()=>void
}
const Card : React.FC<IProposCard> = ({code,name,url,style,onPress})=>{
  
    return (
        <TouchableOpacity onPress={onPress}>
            <View  style={CardStyle.container}>
                <Text style={CardStyle.labelCode}>{code}</Text>
                
                <View style={CardStyle.imageContainer}>
                    <Image
                        style={CardStyle.image}
                        source={{
                                    uri:url
                                }}
                    />
                </View>

                <View style={CardStyle.subContainer}>
                    <Text style={CardStyle.labelName}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default Card
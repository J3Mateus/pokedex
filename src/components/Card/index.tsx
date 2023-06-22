import { StyleProp,View, TextStyle,Text,Image } from "react-native";
import CardStyle from "../../styles/Card.style";

interface IProposCard{
    code : string 
    name : string
    url : string 
    style? : StyleProp<TextStyle>
}
const Card : React.FC<IProposCard> = ({code,name,url,style})=>{
  
    return (
        <View style={CardStyle.container}>
            <Text></Text>
            <View>
                <Image
                    style={CardStyle.image}
                    source={{
                                uri:"https://static.wikia.nocookie.net/pokepediabrasil/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20160625010912&path-prefix=pt-br"
                            }}
                />

            </View>

            <View style={CardStyle.subContainer}>
                <Text></Text>
            </View>
        </View>
    )
}

export default Card
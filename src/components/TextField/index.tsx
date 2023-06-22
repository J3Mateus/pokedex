import { StyleProp, TextInput,View, TextStyle,Text } from "react-native";

interface IProposTextField{
    placeHolder? : string 
    style? : StyleProp<TextStyle>
}
const TextField : React.FC<IProposTextField> = ({placeHolder,style})=>{
  
    return (
            <TextInput
                style={style}
                placeholder={placeHolder}
            />
    )
}

export default TextField
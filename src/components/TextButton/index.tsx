import {TouchableOpacity,StyleProp,TextStyle,Text } from 'react-native'

interface IPropsTextButton {
    label: string ,
    onClick? : ()=>void 
    style? : StyleProp<TextStyle>
}
const TextButton : React.FC<IPropsTextButton> = ({label,onClick,style})=>{
    return (
        <TouchableOpacity style={style} onPress={onClick} >
            <Text style={{textAlign:"center",marginTop:10}}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton
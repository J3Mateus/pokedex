import {useState,useEffect} from 'react'
import { View,Text,Image,Button, ScrollView} from 'react-native'
import HomeStyle from '../../styles/Home.style'
import TextField from '../../components/TextField'
import TextFieldStyle from '../../styles/TextField.style'
import Card from '../../components/Card'
import TextButton from '../../components/TextButton'
import Loading from '../../components/Loading'

const Home = ()=>{

    interface Pokemon {
        code : string,
        name : string,
        url : string 
    }

    const [listPokemon,setListPokemon] = useState<Array<Pokemon>>([])
    const [loading,setLoading] = useState<boolean>(true)
    useEffect(()=>{
        const fetchPokemonSprites = async () => {
            try {
              const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
              const data = await response.json();
          
              const pokemonList = data.results;
              const newPokemon : Array<Pokemon> = []
              let id_pokemon : number = 0
              for (const pokemon of pokemonList) {
                id_pokemon++
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();
                const name = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
                const pokemonCard : Pokemon = {
                  code:`#${id_pokemon}`,
                  name:name,
                  url: pokemonData.sprites.other['official-artwork'].front_default,
                }
      
                newPokemon.push(pokemonCard)
              }
        
              setListPokemon(newPokemon)
              setLoading(false)
      
            } catch (error) {
              console.error('Erro ao obter sprites dos Pokémon:', error);
            }
          };
          fetchPokemonSprites()
    },[])


    const renderCardRows = ( pokemon : Array<Pokemon>) => {

        const cardRows: Array<JSX.Element> = [];
        let currentRow: Array<JSX.Element> = [];
    
        for (let i = 0; i < pokemon.length; i++) {
          const { code, name, url } = pokemon[i];
     
    
          currentRow.push(<Card key={i} code={code} name={name} url={url} />);
    
          if ((i + 1) % 3 === 0 || i === pokemon.length - 1) {
            cardRows.push(
              <View key={i} style={HomeStyle.cardRow}>
                {currentRow}
              </View>
            );
    
            currentRow = [];
          }
        }
    
        return cardRows;
      };

    if (loading){
        return <Loading/>
    }
    return (
        <View style={HomeStyle.container}>
            <View style={{alignContent:"center",flexDirection:"row",marginTop:50,marginLeft:10}}>
                <Image style={{marginTop:5,tintColor:"white"}} source={require("../../../assets/Pokeball.png")}/>
                <Text style={{marginLeft:10,fontSize:40,fontWeight:"bold",color:"white"}}>PokéDex</Text>
            </View>


            <View style={HomeStyle.header}>
                <TextField style={TextFieldStyle.TextField} placeHolder='Buscar..'/>
                <TextButton style={{backgroundColor:"white",width:40,height:40,borderRadius:60,marginRight:10}} label='#' onClick={()=>{}}/>
            </View>
           
            <View style={HomeStyle.subContainer}>
                <ScrollView>
                    {renderCardRows(listPokemon)}
                </ScrollView>

            </View>
        </View>
    )
}

export default Home
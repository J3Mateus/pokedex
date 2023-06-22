import React from 'react'
import { View,Text,Image,Button, ScrollView} from 'react-native'
import HomeStyle from '../../styles/Home.style'
import TextField from '../../components/TextField'
import TextFieldStyle from '../../styles/TextField.style'
import Card from '../../components/Card'

const Home = ()=>{
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.header}>
                <TextField style={TextFieldStyle.TextField} placeHolder='Buscar..'/>
            </View>
           
            <View style={HomeStyle.subContainer}>
                <ScrollView>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>
                    <Card code={'#0001'} name={'Charmander'} url=''/>

                </ScrollView>

            </View>
        </View>
    )
}

export default Home
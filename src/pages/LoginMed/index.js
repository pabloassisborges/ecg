import React, {Component, useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import logoImg from '../../../assets/icon.png';

export default class App extends Component {

    state = {
        nome: '',
        senha: '',
    }

    render() {
        
        const {navigation} = this.props;
       // const nomepaciente  = navigation.getParam ('nome');
       
        function navigateBack() {
            navigation.navigate('Home');
        }

        const UserList = ({ nome, senha }) => {
            if (nome == "admin" && senha == "123") {
              return 1;
            }
            else{
                return 0;
            }
        }

        return(
            <View style={styles.container}>

            <Image
            source={logoImg}
            style={styles.logo}
            />

            <TextInput
                style={styles.input}
                onChangeText = { text => this.state.nome = text}
                placeholder="Digite seu nome:"
            />

            <TextInput
                secureTextEntry = {true}
                style={styles.input}
                onChangeText = { text => this.state.senha = text}
                placeholder="Digite sua senha:"
            />

            <TouchableOpacity 
            style={styles.action} 
            onPress={ () => { this.props.navigation.navigate('InicioMed', {'nome': this.state.nome})}}>
                 <Text style={styles.actionText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.volta} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#fff" />
                    <Text style={styles.volta2}>Voltar à página inicial.</Text>
            </TouchableOpacity>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#066395',
    },

    logo: {
        width: 80,
        height: 80,
    },
    
    input:{
        marginTop: 10,
        padding: 10,
        width:300,
        backgroundColor:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    action: {
        backgroundColor: '#043f5f',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },

    header: {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    volta:{
        fontSize: 16,
        color: '#fff',
        marginTop: 100,
        marginLeft:110,
        width: '80%',
    },

    volta2:{
        fontSize: 16,
        color: '#fff',
        marginTop: - 25,
        marginLeft: 30,
        width: '80%',
    }
})
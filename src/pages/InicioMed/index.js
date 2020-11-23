import React, {Component, useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import logoImg from '../../assets/logo.png';
import Constants from 'expo-constants';
export default class Inicio extends Component {
       
    render() {
       
        const {navigation} = this.props;
       // const nomepaciente  = navigation.getParam ('nome');
       
       function navigateToAtividades() {
        navigation.navigate('Atividades');
        }

        function navigateToGrafico(){
            navigation.navigate('ECG');
        }


        function navigateBack() {
            navigation.navigate('PLogin');
        }

        function navigateToDetalhe() {
            navigation.navigate('Detalhe');
        }

        return (

            <View style={styles.container}>
                                              
                <Image
                    source={require('../../assets/perfilmed.png')}
                    style={styles.imagem}
                />
                <Text style={styles.titulo}> Bem-vindo(a) ao seu perfil!</Text>
                <Text style={styles.titulo}>Selecione o paciente:</Text>

                <View style={styles.atividade}>
                        <Text style={styles.atividadeProperty}>NOME:</Text>
                        <Text style={styles.atividadeValue}>Mariana Rigo</Text>

                        <Text style={styles.atividadeProperty}>DATA DE EXAME:</Text>
                        <Text style={styles.atividadeValue}>28/11/2020</Text>

                        <Text style={styles.atividadeProperty}>DOENÇA CARDÍACA:</Text>
                        <Text style={styles.atividadeValue}>Nenhuma</Text>
                       
                        <TouchableOpacity style={styles.action} onPress={navigateToGrafico}>
                             <Text style={styles.actionText}>Visualizar exame</Text>
                       </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={styles.volta} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#043f5f" />
                    <Text style={styles.volta2}>Voltar à página de login.</Text>
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
    },
    header: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20,
        color: '#043f5f',
    },
    corpo: {
        fontSize: 16,
        color:'#043f5f',
    },
    imagem: {
        width: 80,
        height: 80,
        marginBottom: 30,
        alignItems: 'center'
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    
    action: {
        backgroundColor: '#043f5f',
        borderRadius: 8,
        height: 50,
        width: 200,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    volta:{
        fontSize: 16,
        color: '#043f5f',
        marginTop: 100,
        marginLeft:110,
        width: '80%',
    },

    volta2:{
        fontSize: 16,
        color: '#043f5f',
        marginTop: - 25,
        marginLeft: 30,
        width: '80%',
    },
    atividade: {
        marginTop: 15,
        padding: 30,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    atividadeProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight:'bold'
    },

    atividadeValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 20,
        color: '#737380'
    },
})
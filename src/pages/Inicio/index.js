import React, {Component, useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';

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

        function navigateToGrafico() {
            navigation.navigate('ECG');
        }

        return (

            <View style={styles.container}>
                <Image
                    source={require('../../assets/perfil.png')}
                    style={styles.imagem}
                />
                <Text style={styles.titulo}> Bem-vindo(a) ao seu perfil!</Text>

                <TouchableOpacity style={styles.action} onPress={navigateToGrafico}>
                    <Text style={styles.actionText}>Acesse seu exame</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={navigateToAtividades}>
                    <Text style={styles.actionText}>Entre em contato com um</Text>
                    <Text style={styles.actionText}>profissional da saúde</Text>
                </TouchableOpacity>

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
        width: '80%',
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
    }
})
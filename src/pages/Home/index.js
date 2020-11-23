import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

export default function Perfil() {
    
    const navigation = useNavigation();
    
    function navigateToPLogin() {
        navigation.navigate('PLogin');
    }

    function navigateToLoginMed() {
        navigation.navigate('LoginMed');
    }
         return (
            <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
            <Text style={styles.title}>Bem-Vindo(a) ao seu ECG online!</Text>
            
            
            <View style={styles.loginBox}>
            <Text style={styles.activityTitle}> Selecione seu perfil de usuário para login:</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={navigateToPLogin}>
                    <Text style={styles.actionText}>Paciente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={navigateToLoginMed}>
                    <Text style={styles.actionText}>Profissional</Text>
                </TouchableOpacity>

            </View>
            </View>

            <Text style={styles.nomesTitle}>Aplicativo desenvolvido por:</Text>
            <Text style={styles.nomes}>Jeovanna Valentina</Text>
            <Text style={styles.nomes}>Mariana Rigo Estevão</Text>
            <Text style={styles.nomes}>Marianna Ferreira Andrade</Text>
            <Text style={styles.nomes}>Murilo Reimão</Text>
           
        
        </View>    
        
      );
}

    

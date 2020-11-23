import React from 'react';
import { Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detalhe() {
    const navigation = useNavigation();
    const route = useRoute();

    const atividade = route.params.atividade;
    const message =`Olá ${atividade.nome}, essa é uma mensagem de um paciente que acessou o aplicativo de ECG online e gostaria de te contactar.`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Contato Exame Online de ECG: ${atividade.titulo}`,
            recipients: [atividade.email],
            body: message,
        })
    }

        function sendWhatsapp() {
            Linking.openURL (`whatsapp://send?phone=${atividade.whatsapp}&text=${message}`);
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg}/>

                    <TouchableOpacity onPress={navigateBack}>
                        <Feather name="arrow-left" size={28} color="#043f5f" />
                    </TouchableOpacity>
                </View>

                <View style={styles.atividade}>
                    <Text style={[styles.atividadeProperty, {marginTop: 0}]}>NOME COMPLETO:</Text>
                    <Text style={styles.atividadeValue}>{atividade.nome}</Text>

                    <Text style={styles.atividadeProperty}>USUÁRIO:</Text>
                    <Text style={styles.atividadeValue}>{atividade.titulo}, {atividade.cargo} em {atividade.area}</Text>

                    <Text style={styles.atividadeProperty}>DOCUMENTAÇÃO:</Text>
                    <Text style={styles.atividadeValue}>{atividade.prazo}</Text>
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.activityTitle}> Entre em contato com {atividade.nome}</Text>

                    <Text style={styles.activityDescription}>Selecione a melhor opção:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Text style={styles.actionText}>WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </View>
        );
    

}
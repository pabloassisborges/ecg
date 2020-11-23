import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color:"#737380",
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 16,
        color: '#737380'
    },

    nomesTitle: {
        fontSize: 12,
        lineHeight: 20,
        marginTop: 200,
        marginBottom: 12,
        color: '#737380'
    },
    
    nomes: {
        fontSize: 10,
        lineHeight: 20,
        marginLeft: 10,
        marginBottom: 2,
        color: '#737380'
    },

    homeList: {
        marginTop: 32,
    },

    home: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    homeProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight:'bold'
    },

    homeValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButton: {
        color: '#043f5f',
        fontSize: 15,
        fontWeight: 'bold'
    },

    loginBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    activityTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    activityDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
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
        width: '48%',
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

});
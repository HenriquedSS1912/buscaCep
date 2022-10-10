import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-elements';
import { Endereco } from '../../components/models/Endereco';

export function Result(props: { endereco: any; }) {

    const endereco = props.endereco;

    return (
        <>
            {endereco != null ?
                <>
                    {!('erro' in endereco) ?
                        <View style={[styles.allEndereco]}>
                            
                            <Card.Title style={styles.titleCard}>Endereço</Card.Title>
                            <Text style={styles.itemTitle}>Rua: {endereco.logradouro}</Text>
                            <Text style={styles.itemTitle}>Bairro:  {endereco.bairro}</Text>
                            <Text style={styles.itemTitle}>Cidade: {endereco.localidade}</Text>
                            <Text style={styles.itemTitle}>Estado: {endereco.uf}</Text>

                        </View>
                        :
                        <View style={[styles.allEnderecoNotFound]}>
                            <Card.Title style={styles.red}>Endereço não encontrado</Card.Title>
                            <Card.Title style={styles.red}>Por favor insira o CEP corretamente!</Card.Title>
                        </View>
                    }
                </>
                : <View style={[styles.insertAdress]}>
                    <Card.Title style={styles.red}>Insira um CEP completo</Card.Title>
                </View>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    titleCard: {
        fontSize: 20,
        marginTop: 4,
        fontWeight: 'bold',
    },
    allEndereco: {
        flex: 1,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 20,
        paddingLeft: 10,
        maxHeight: 200,
        marginRight: 20,
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
    },
    itemTitle: {
        fontSize: 18,
        marginBottom: 6
    },
    red: {
        color: 'red',
        alignItems: 'center',
        marginTop: 5
    },
    allEnderecoNotFound: {
        flex: 1,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 20,
        paddingLeft: 10,
        maxHeight: 80,
        marginRight: 20,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 50,
    },
    insertAdress: {

    }

})
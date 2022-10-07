import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import InputCep from '../../components/InputCep/Index';
import { Result } from '../../components/Result';
import { Endereco } from '../../components/models/Endereco';

export default function Home() {

    const state = {
        loaded: false
    }

    const [endereco, setEndereco] = useState({});

    const quandoResultado = (endereco: Endereco) => {
        setEndereco(endereco);
    }

    return (
        <View style={styles.container}>
            <Header name="Henrique da Silva"></Header>

            <InputCep quandoResultado={quandoResultado}></InputCep>

            {/* <Result endereco={endereco}/> */}
            <Result endereco={endereco}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    // title: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     margin: 14,
    // },
});

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

import Loading from '../FullPageLoader';


export default function InputCep(props) {
    const enderecoEncontrado = '';

    const [loading, setLoading] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'onBlur' });

    const onSubmit = data => {
        console.log('input usuario: ', data.name);

        setLoading(true);

        axios({
            method: 'get',
            url: `https://viacep.com.br/ws/${data.name}/json/`,
        }).then((response) => {

            const valueResponse = response.data;

            if (props.quandoResultado)
            props.quandoResultado(response.data)

            setTimeout(() => {
                setLoading(false);
            }, 2000)

        }).catch((err) => {
            console.log('ERROOOOOOOOOOOOOOOOOOOO')
            setLoading(false);
            props.quandoResultado(null);
        });

    }

    return (
        <>
            {loading ? <Loading /> : ''}
            <SafeAreaView style={styles.container}>
                <Controller control={control}
                    name="name"
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View>
                            <TextInputMask style={styles.input}
                                type={'zip-code'}
                                placeholder="Insira seu CEP"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                            />

                        </View>
                    )}
                    rules={{
                        required: {
                            value: true,
                            message: 'Field is required!'
                        }
                    }}
                />
                <Button style={styles.button} title="Enviar" onPress={handleSubmit(onSubmit)} />
            </SafeAreaView  >
            {enderecoEncontrado ?
                // <Result />
                console.log("endereço true")
                : null
            }
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    input: {
        // flex: 1,
        // height: 40,
        // width: '100%',
        // margin: 12,
        // borderWidth: 1,
        // padding: 10,
        fontSize: 16
    },
    button: {
        color: '#000',
        height: 10,
    }

})

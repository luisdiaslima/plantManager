import React, { useCallback, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage'

export function UserIdentification() {
        const navigation = useNavigation()

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const handleSubmit = useCallback(async() => {
        if (!name) {
            return Alert.alert('Me diz como chamar você 🥺');
        }

        await AsyncStorage.setItem('@plantmanager:user', name);

        navigation.navigate('Confirmation', {
            title: 'Prontinho',
            subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
            buttonTitle: 'Confirmar',
            icon: 'smile',
            nextScreen: 'PlantSelect'
        });
    }, [navigation, name])


    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!name);
    }, [name]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, []);

    const handleInputChange = useCallback((value: string) => {
        setName(value);
        setIsFilled(!!value)
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                            {isFilled ? '😄' : '😃'}
                            </Text>
                            <Text style={styles.title}>
                                Como podemos {'\n'}
                                chamar você?
                            </Text>
                        </View>
                        
                        <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.green }
                            ]}
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>
                            <Button onPress={handleSubmit} title="Confirmar"></Button>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    }
});
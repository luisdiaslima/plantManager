import React, { useCallback, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    PlatformColor,
    Platform,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button'

export function Confirmation() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();


    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!name);
    }, [name])

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    const handleInputChange = useCallback((value: string) => {
        setName(value);
        setIsFilled(!!value)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.emoji}>
                        😄
                    </Text>

                    <Text style={styles.title}>
                        Prontinho.
                    </Text>
                    <Text style={styles.subtitle}>
                        Agora vamos começar a cuidar das suas
                        plantinhas com muito cuidado.
                    </Text>

                     <View style={styles.footer}>
                        <Button title="Confirmar" />
                    </View>
                </View>

               
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30,
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 10,
        color: colors.heading,
    },
    emoji: {
        fontSize: 78,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20,
    }
    
});
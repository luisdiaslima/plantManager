import React, { useCallback } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';


export function Welcome() {
    const navigation = useNavigation()
    const handleStart = useCallback(() => {
        navigation.navigate('UserIdentification')
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                Gerencia {'\n'}
                suas plantas de {'\n'}
                forma fácil.
            </Text>

            <Image
                source={wateringImg}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart}>
                <Text style={styles.buttonText}>
                    <Feather
                        name="chevron-right"
                        style={styles.buttonIcon}
                    />
                </Text>
            </TouchableOpacity>
            </View>
            
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        lineHeight: 33,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    }
});

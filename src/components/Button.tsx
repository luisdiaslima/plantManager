import React from 'react';
import { TouchableOpacity , Text, StyleSheet, TouchableOpacityProps} from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        borderRadius: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.text,
    },
});

import React from 'react';
import {useController} from "react-hook-form";
import {Checkbox, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from "react-native";

const TermsOfService = (
    {
        name,
        rules,
        shouldUnregister,
        defaultValue,
        control,
    }
) => {
    const {field} = useController({
        name,
        rules,
        shouldUnregister,
        defaultValue,
        control,
    });

    return (
        <View style={styles.termsContainer}>
            <Checkbox.Android
                status={field.value}
                color='#F19336'
                onPress={() => {
                    field.onChange(field.value === 'checked' ? 'unchecked' : 'checked');
                }}
            />
            <View style={styles.termsTxtContainer}>
                <Text style={styles.termsTxt}>
                    By signing up you accept the
                </Text>
                <TouchableOpacity Press={() => {}}>
                    <Text onPress={() => { }} style={styles.termsLink}>
                        Terms of Service and Privacy Policy
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    termsContainer: {
        flexDirection: 'row',
    },
    termsTxtContainer: {
        paddingTop: 10,
        gap: -5,
    },
    termsTxt: {
        color: '#757575',
        fontFamily: 'OpenSans-Regular',
    },
    termsLink: {
        fontFamily: 'OpenSans-Bold',
        marginTop: 5,
        color: '#F19336'
    },
})

export default TermsOfService
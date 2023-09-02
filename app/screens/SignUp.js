import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import {observer} from "mobx-react";

import {PaperProvider, Button, IconButton, Text, TextInput, HelperText} from 'react-native-paper';
import {useAuthenticationStore} from "../stores/AuthenticationStore";

const SignUp = ({ navigation }) => {
    const {
        email,
        password,
        passwordConfirmation,
        signUp,
        handleChangeAuthenticationStore,
        signUpFailed,
        errorMessage,
    } = useAuthenticationStore();

    const onSignUp = async () => {
        const response = await signUp(email, password);
        if (response) {
            navigation.navigate('ParentDashboard')
        }
    }

    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: '#F1E6E0' }}>
                <Text variant="displaySmall" style={styles.logo}>Sign Up</Text>

                <View style={styles.container}>
                    <TextInput
                        mode='outlined'
                        label="Email"
                        value={email}
                        onChangeText={email => handleChangeAuthenticationStore('email', email)}
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        selectionColor='#F19336'
                        style={{ marginBottom: 5 }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Password"
                        value={password}
                        secureTextEntry
                        onChangeText={password => handleChangeAuthenticationStore('password', password)}
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        style={{ marginBottom: 5 }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Confirm Password"
                        value={passwordConfirmation}
                        secureTextEntry
                        onChangeText={password => handleChangeAuthenticationStore('passwordConfirmation', password)}
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                    />

                    <HelperText type="error" visible={signUpFailed}>
                        {errorMessage}
                    </HelperText>

                    <Button
                        mode="contained"
                        buttonColor='#F19336'
                        labelStyle={{ fontWeight: 700, fontSize: 20 }}
                        style={{ marginTop: 20 }}
                        onPress={() => onSignUp()}>
                        Sign Up
                    </Button>

                    <View style={styles.termsContainer}>
                        <IconButton
                            icon='checkbox-outline'
                            iconColor='#F19336'
                            style={{ alignSelf: 'flex-start' }}
                        />
                        <Text style={styles.termsTxt}>
                            By signing up you accept the Terms of Service and Privacy Policy
                        </Text>
                    </View>
                    <View style={styles.bottomTxtContainer}>
                        <Text style={{ fontWeight: 700, color: '#757575' }}>
                            Already have an account?
                        </Text>

                        <Button
                            mode="text"
                            textColor='#F19336'
                            compact
                            labelStyle={{ fontWeight: 700, alignSelf: 'flex-end', }}
                            onPress={() => navigation.navigate('SignIn')}>
                            Sign In
                        </Button>
                    </View>
                </View>
            </View>
        </PaperProvider>
    );
}

export default observer(SignUp)

const styles = StyleSheet.create({
    container: {
        flex: 5,
        margin: 30,
    },
    logo: {
        flex: 1,
        paddingTop: '30%',
        textAlign: 'center',
        fontWeight: 600,
        color: '#F19336',
    },
    termsContainer: {
        flexDirection: 'row',
        height: 60,
    },
    termsTxt: {
        flex: 1, flexWrap: 'wrap',
        alignSelf: 'center',
        color: '#757575'
    },
    bottomTxtContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 25
    }
})
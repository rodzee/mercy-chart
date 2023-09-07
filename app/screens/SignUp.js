import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import { observer } from "mobx-react";

import { PaperProvider, Button, IconButton, Text, TextInput, HelperText } from 'react-native-paper';
import { useAuthenticationStore } from "../stores/AuthenticationStore";

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
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text variant="displaySmall" style={styles.header}>Sign Up</Text>
                    <TextInput
                        mode='outlined'
                        label="Email"
                        value={email}
                        onChangeText={email => handleChangeAuthenticationStore('email', email)}
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        selectionColor='#F19336'
                        style={{ marginBottom: 10 }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Password"
                        value={password}
                        secureTextEntry
                        onChangeText={password => handleChangeAuthenticationStore('password', password)}
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        style={{ marginBottom: 10 }}
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

                    <View style={styles.termsContainer}>
                        <IconButton
                            icon='checkbox-outline'
                            iconColor='#F19336'
                        />
                        <Text style={styles.termsTxt}>
                            By signing up you accept the Terms of Service and Privacy Policy
                        </Text>
                    </View>

                    <Button
                        mode="contained"
                        buttonColor='#F19336'
                        labelStyle={{ fontWeight: 700, fontSize: 16 }}
                        style={{ marginTop: 20 }}
                        onPress={() => onSignUp()}>
                        Sign Up
                    </Button>

                    <View style={styles.bottomTxtContainer}>
                        <Text style={{ color: '#757575' }}>
                            Already have an account?
                        </Text>

                        <Button
                            mode="text"
                            textColor='#F19336'
                            compact
                            labelStyle={{ fontWeight: 'bold', alignSelf: 'flex-end', }}
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
    root: {
        flex: 1,
        backgroundColor: '#F1E6E0',
        justifyContent: 'center'
    },
    container: {
        margin: 30,
    },
    header: {
        paddingBottom: '5%',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#757575',
    },
    termsContainer: {
        flexDirection: 'row',
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
    }
})

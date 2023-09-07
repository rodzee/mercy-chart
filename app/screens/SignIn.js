import React, { useCallback } from 'react';
import { observer } from "mobx-react";
import { StyleSheet, View, } from 'react-native';

import { useAuthenticationStore } from "../stores/AuthenticationStore";
import {
    PaperProvider,
    Button,
    Text,
    TextInput,
    HelperText
} from 'react-native-paper';


const SignIn = ({ navigation }) => {
    const {
        email,
        password,
        signInFailed,
        errorMessage,
        signIn,
        handleChangeAuthenticationStore,
    } = useAuthenticationStore();

    return (
        <PaperProvider>
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text variant="displaySmall" style={styles.header}>Sign In</Text>
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
                    />
                    <Button
                        mode="text"
                        compact={true}
                        textColor='#757575'
                        style={{ alignSelf: 'flex-end', }}
                        onPress={() => navigation.navigate('')}>
                        Forgot Password?
                    </Button>

                    <HelperText type="error" visible={signInFailed}>
                        {errorMessage}
                    </HelperText>

                    <Button
                        mode="contained"
                        buttonColor='#F19336'
                        labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
                        style={{ marginTop: 20, paddingVertical: 3 }}
                        onPress={() => signIn(email, password)}>
                        Sign In
                    </Button>

                    <View style={styles.bottomTxtContainer}>
                        <Text style={{ color: '#757575' }}>
                            Don't have an account yet?
                        </Text>
                        <Button
                            mode="text"
                            textColor='#F19336'
                            compact
                            labelStyle={{ fontWeight: 700, }}
                            onPress={() => navigation.navigate('SignUp')}>
                            Sign Up
                        </Button>
                    </View>
                </View>
            </View>
        </PaperProvider>
    );
}

export default observer(SignIn);

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
    bottomTxtContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    },
})

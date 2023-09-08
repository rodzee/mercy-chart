import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import { observer } from "mobx-react";

import { PaperProvider, Button, Text, TextInput, HelperText, Checkbox } from 'react-native-paper';
import { useAuthenticationStore } from "../stores/AuthenticationStore";
import { set } from 'mobx';

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

    const [checked, setChecked] = React.useState(false);

    return (
        <PaperProvider>
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text variant="displaySmall" style={styles.header}>Sign Up</Text>
                    <TextInput
                        mode='outlined'
                        label="Email"
                        value={email}
                        selectionColor='#F19336'
                        activeOutlineColor='#757575'
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        onChangeText={email => handleChangeAuthenticationStore('email', email)}
                        style={{ marginBottom: 10 }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Password"
                        value={password}
                        secureTextEntry
                        selectionColor='#F19336'
                        activeOutlineColor='#757575'
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        onChangeText={password => handleChangeAuthenticationStore('password', password)}
                        style={{ marginBottom: 10 }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Confirm Password"
                        value={passwordConfirmation}
                        secureTextEntry
                        selectionColor='#F19336'
                        activeOutlineColor='#757575'
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        onChangeText={password => handleChangeAuthenticationStore('passwordConfirmation', password)}
                    />

                    <HelperText type="error" visible={signUpFailed}>
                        {errorMessage}
                    </HelperText>

                    <View style={styles.termsContainer}>
                        <Checkbox.Android
                            status={checked ? 'checked' : 'unchecked'}
                            color='#F19336'
                            onPress={() => {
                                setChecked(!checked)
                            }}
                        />
                        <View style={styles.termsTxtContainer}>
                            <Text style={styles.termsTxt}>
                                By signing up you accept the
                            </Text>
                            <Text onPress={() => { }} style={styles.termsLink}>
                                Terms of Service and Privacy Policy
                            </Text>
                        </View>
                    </View>

                    <Button
                        mode="contained"
                        buttonColor='#F19336'
                        labelStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 16 }}
                        style={{ marginTop: 20 }}
                        onPress={() => onSignUp()}>
                        Sign Up
                    </Button>

                    <View style={styles.bottomTxtContainer}>
                        <Text style={{ color: '#757575', fontFamily: 'OpenSans-Regular', }}>
                            Already have an account?
                        </Text>

                        <Button
                            mode="text"
                            textColor='#F19336'
                            compact
                            labelStyle={{ fontWeight: 'bold', alignSelf: 'flex-end', fontFamily: 'OpenSans-Bold', }}
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
        fontFamily: 'OpenSans-Bold'
    },
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
    bottomTxtContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    }
})

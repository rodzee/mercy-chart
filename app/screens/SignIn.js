import React from 'react';
import { observer } from "mobx-react";
import { StyleSheet, View, } from 'react-native';

import { useAuthenticationStore } from "../stores/AuthenticationStore";
import {
    PaperProvider,
    Button,
    Text,
    TextInput,
    HelperText,
} from 'react-native-paper';
import { useFonts } from 'expo-font';

const SignIn = ({ navigation }) => {

    // FONT SETUP
    const [text, setText] = React.useState('');
    const [fontsLoaded] = useFonts({
        'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    });

    const {
        email,
        password,
        signInFailed,
        errorMessage,
        signIn,
        handleChangeAuthenticationStore,
    } = useAuthenticationStore();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <PaperProvider>
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text variant="displaySmall" style={styles.header}>Sign In</Text>
                    <TextInput
                        mode='outlined'
                        label="Email"
                        value={email}
                        activeOutlineColor='#757575'
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
                        activeOutlineColor='#757575'
                        selectionColor='#F19336'
                        onChangeText={password => handleChangeAuthenticationStore('password', password)}
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                    />
                    <Button
                        mode="text"
                        compact={true}
                        textColor='#757575'
                        style={{ alignSelf: 'flex-end' }}
                        labelStyle={{ fontFamily: 'OpenSans-Regular' }}
                        onPress={() => navigation.navigate('')}>
                        Forgot Password?
                    </Button>

                    <HelperText type="error" visible={signInFailed} style={styles.helperTxt}>
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
                        <Text
                            style={{ color: '#757575', fontFamily: 'OpenSans-Regular' }}
                        >
                            Don't have an account yet?
                        </Text>
                        <Button
                            mode="text"
                            textColor='#F19336'
                            compact
                            labelStyle={{ fontFamily: 'OpenSans-Bold' }}
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
        fontFamily: 'OpenSans-Bold',
        color: '#757575',
    },
    helperTxt: {
        color: '#D92D00',
        fontFamily: 'OpenSans-Bold',

    },
    bottomTxtContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    },
})

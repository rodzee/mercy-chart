import React from 'react';
import {getItemAsync} from "expo-secure-store";
import { StyleSheet, View, } from 'react-native';
import {observer} from "mobx-react";

// Import for the UI library
import { Button, Text, TextInput } from 'react-native-paper';
import { useAuthenticationStore } from './stores/AuthenticationStore';

const Login = ({ navigation }) => {
    const {
        handleChangeAuthenticationStore,
        email,
        password
    } = useAuthenticationStore();

    async function login() {
        // let result = await getItemAsync(key);
        if (email && password) {
            // Insert Logic to display the login page
            console.log('email', email);
            console.log('pw', password)
            // } else {
            //     // return to signup if it didn't register
            //     console.log('Error');
            // }
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                mode='outlined'
                label="Email"
                value={email}
                clearTextOnFocus
                onChangeText={email => handleChangeAuthenticationStore('email', email)}
                outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                selectionColor='#F19336'
                style={{ marginBottom: 5 }}
                // onSubmitEditing={event => { getValueFor(event.nativeEvent.text) }}
            />
            <TextInput
                mode='outlined'
                label="Password"
                value={password}
                secureTextEntry
                onChangeText={password => handleChangeAuthenticationStore('password', password)}
                outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                // onSubmitEditing={event => { getValueFor(event.nativeEvent.text) }}
            />
            <Button
                mode="text"
                textColor='#757575'
                style={{ alignSelf: 'flex-end' }}
                onPress={() => navigation.navigate('')}>
                Forgot Password?
            </Button>

            <Button
                mode="contained"
                buttonColor='#F19336'
                labelStyle={{ fontWeight: 700 }}
                style={{ marginTop: 20 }}
                onPress={login}>
                Login
            </Button>

            <View style={{ alignItems: 'center', flexDirection: 'row', alignSelf: 'center', }}>
                <Text style={{ fontWeight: 700, color: '#757575' }}>
                    Don't have an account yet?
                </Text>

                <Button
                    mode="text"
                    textColor='#F19336'
                    compact
                    labelStyle={{ fontWeight: 700, alignSelf: 'flex-end', }}
                    onPress={() => navigation.navigate('Signup')}>
                    Sign Up
                </Button>
            </View>
        </View>
    )
}

export default observer(Login)

const styles = StyleSheet.create({
    container: {
        flex: 3,
        margin: 30,
    },
});

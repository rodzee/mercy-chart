import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, View, } from 'react-native';

// Import for the UI library
import { PaperProvider, Button, Text, TextInput } from 'react-native-paper';

// This function will check if the stored login/password are valid
async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        // Insert Logic to display the login page
        console.log(result);
    } else {
        // return to signup if it didn't register
        console.log('Error');
    }
}

export default function Home({ navigation }) {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: '#F1E6E0' }}>
                <Text variant="displaySmall" style={styles.logo}>Rulito</Text>

                <View style={styles.container}>
                    <TextInput
                        mode='outlined'
                        label="Login"
                        value={login}
                        clearTextOnFocus
                        onChangeText={login => setLogin(login)}
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
                        onChangeText={password => setPassword(password)}
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
                        onPress={() => getValueFor}>
                        GO
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
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        margin: 30,
    },

    logo: {
        flex: 1,
        paddingTop: '40%',
        textAlign: 'center',
        fontWeight: 600,
        color: '#F19336',
    }
})


import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, View, } from 'react-native';

// Import for the UI library
import { PaperProvider, Button, Text, TextInput } from 'react-native-paper';

// Function to save data from login and password
export async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export default function Signup() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: '#F1E6E0' }}>
                <Text variant="displaySmall" style={styles.logo}>SignUp</Text>

                <View style={styles.container}>
                    <TextInput
                        mode='outlined'
                        label="Email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        selectionColor='#F19336'
                        style={{ marginBottom: 5 }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Password"
                        value={password}
                        secureTextEntry
                        onChangeText={password => setPassword(password)}
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                    />
                    <Button
                        mode="contained"
                        buttonColor='#F19336'
                        labelStyle={{ fontWeight: 700 }}
                        style={{ marginTop: 20 }}
                        onPress={() => { save(email, password) }}>
                        Register
                    </Button>
                </View>
            </View>
        </PaperProvider>
    );
}

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
    }
})


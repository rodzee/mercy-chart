import React from 'react';
import { StyleSheet, View, } from 'react-native';

// Import for the UI library
import { PaperProvider, Text } from 'react-native-paper';
import Login from "./Login";

export default function Home() {
    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: '#F1E6E0' }}>
                <Text variant="displaySmall" style={styles.logo}>Rulito</Text>
                <Login />
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

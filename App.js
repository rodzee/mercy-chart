import React from 'react';
import { StyleSheet } from 'react-native';

// LIB IMPORTS //
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

// PAGE IMPORTS //
import HomeScreen from './app/Home';
import Signup from './app/Signup';

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="Home" component={HomeScreen}
                        options={styles.header} />
                    <Stack.Screen name="Signup" component={Signup} options={styles.headerWithNav} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    header: {
        headerStyle: {
            backgroundColor: '#F1E6E0',
        },
        headerShown: false,
    },

    headerWithNav: {
        headerStyle: {
            backgroundColor: '#F1E6E0',
        },
        // headerShown: false,
        headerShadowVisible: false,
        headerBackTitleVisible: true,
        headerTintColor: '#F19336',
        title: null,
    }

})
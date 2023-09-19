import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { observer } from "mobx-react";

// LIB IMPORTS //
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

// PAGE IMPORTS //
import SignUp from './app/screens/SignUp';
import SignIn from "./app/screens/SignIn";
import Caretaker from './app/screens/CaretakerProfile';
import ChildProfile from './app/screens/ChildProfile';

// COMPONENT IMPORTS //
import NavigationBar from "./app/components/NavigationBar";
import { useAuthenticationStore } from "./app/stores/AuthenticationStore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Settings from "./app/screens/Settings";
import Home from "./app/screens/Home";
import History from "./app/screens/History";
import CaretakerProfile from './app/screens/CaretakerProfile';

const Stack = createNativeStackNavigator();

const App = () => {
    const authStore = useAuthenticationStore();
    const { handleChangeAuthenticationStore, isSignedIn } = authStore;
    const auth = getAuth();

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                handleChangeAuthenticationStore('currentUser', user)
                handleChangeAuthenticationStore('isSignedIn', true)
            } else {
                handleChangeAuthenticationStore('isSignedIn', false)
            }
        });
        return subscriber; // unsubscribe on unmount
    }, [])

    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignIn">
                    {
                        isSignedIn ?
                            <>
                                <Stack.Screen name="Navigation" component={NavigationBar} options={styles.header} />
                                <Stack.Screen name="CaretakerProfile" component={CaretakerProfile} options={styles.headerWithNav} />
                                <Stack.Screen name="ChildProfile" component={ChildProfile} options={styles.headerWithNav} />
                            </> :
                            <>
                                <Stack.Screen name="SignIn" component={SignIn} options={styles.header} />
                                <Stack.Screen name="SignUp" component={SignUp} options={styles.headerWithNav} />
                            </>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default observer(App)

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
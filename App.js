import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { observer } from "mobx-react";

// LIB IMPORTS //
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// COMPONENT IMPORTS //
import { useAuthenticationStore } from "./app/stores/AuthenticationStore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeStackScreen from "./app/stacks/HomeStackScreen";
import HistoryStackScreen from "./app/stacks/HistoryStackScreen";
import SettingsStackScreen from "./app/stacks/SettingsStackScreen";
import AuthenticationStackScreen from "./app/stacks/AuthenticationStackScreen";

const Tab = createBottomTabNavigator();

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
                { isSignedIn ?
                    <Tab.Navigator screenOptions={({route}) => ({
                       tabBarIcon: ({focused, color, size}) => {
                           let iconName;

                           switch (route.name) {
                               case 'History':
                                   iconName = 'history';
                                   break;
                               case 'Settings':
                                   iconName = 'settings';
                                   break;
                               default:
                                   iconName = 'home';
                           }

                           return <MaterialIcons name={iconName} size={size} color={color} />;
                       },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                        headerShown: false
                    })}

                        >
                        <Tab.Screen name="Home" component={HomeStackScreen} />
                        <Tab.Screen name="History" component={HistoryStackScreen} />
                        <Tab.Screen name="Settings" component={SettingsStackScreen} />
                    </Tab.Navigator> :
                    <AuthenticationStackScreen />
                }
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
        headerShadowVisible: false,
        headerBackTitleVisible: true,
        headerTintColor: '#F19336',
        title: null,
    }

})

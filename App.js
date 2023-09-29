import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { observer } from "mobx-react";

// LIB IMPORTS //
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import {GestureHandlerRootView} from "react-native-gesture-handler";

// COMPONENT IMPORTS //
import { useAuthenticationStore } from "./app/stores/AuthenticationStore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeStackScreen from "./app/stacks/HomeStackScreen";
import HistoryStackScreen from "./app/stacks/HistoryStackScreen";
import SettingsStackScreen from "./app/stacks/SettingsStackScreen";
import AuthenticationStackScreen from "./app/stacks/AuthenticationStackScreen";
import { useCommonStore } from "./app/stores/CommonStore";

const Tab = createBottomTabNavigator();

const App = () => {
    const authStore = useAuthenticationStore();
    const { isLoading } = useCommonStore();
    const { handleChangeAuthenticationStore, isSignedIn } = authStore;
    const auth = getAuth();

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                handleChangeAuthenticationStore('user', user)
                handleChangeAuthenticationStore('isSignedIn', true)
            } else {
                handleChangeAuthenticationStore('isSignedIn', false)
            }
        });
        return subscriber; // unsubscribe on unmount
    }, [])

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PaperProvider>
                <NavigationContainer>
                    <Spinner
                        visible={isLoading}
                        textContent={'Loading...'}
                        cancelable
                        textStyle={{ color: '#F19336' }}
                    />
                    {isSignedIn ?
                        <Tab.Navigator screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
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
                            tabBarStyle: { paddintBottom: 20, paddingTop: 10, height: 70 },
                            tabBarLabelStyle: { paddingBottom: 15 },
                            tabBarActiveTintColor: '#D92D00',
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
        </GestureHandlerRootView>
    );
}

export default observer(App)

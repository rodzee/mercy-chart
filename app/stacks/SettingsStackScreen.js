import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Settings from "../screens/Settings";

const SettingsStack = createNativeStackNavigator();
const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="HomeStack"
                component={Settings}
                options={{headerShown: false}}
            />
        </SettingsStack.Navigator>
    );
}

export default SettingsStackScreen;
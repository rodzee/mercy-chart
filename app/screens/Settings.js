import * as React from 'react';
import {observer} from "mobx-react";
import { StyleSheet, View, } from 'react-native';

import {Button, PaperProvider, Text} from 'react-native-paper';
import {useAuthenticationStore} from "../stores/AuthenticationStore";

const Settings = ({ navigation }) => {
    const { signOut } = useAuthenticationStore();
    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: '#F1E6E0' }}>
                <Text variant="displaySmall" style={styles.header}>Settings</Text>

                <Button
                    mode="contained"
                    buttonColor='#F19336'
                    labelStyle={{ fontWeight: 700, fontSize: 20 }}
                    style={{ marginTop: 20 }}
                    onPress={() => signOut()}>
                    Sign out
                </Button>
            </View>
        </PaperProvider>
    );
}

export default observer(Settings);

const styles = StyleSheet.create({
    header: {
        flex: 1,
        paddingTop: '40%',
        textAlign: 'center',
        fontWeight: 600,
        color: '#F19336',
    },
})

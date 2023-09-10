import * as React from 'react';
import { observer } from "mobx-react";
import { StyleSheet, View, } from 'react-native';

import { Button, PaperProvider, Text } from 'react-native-paper';
import { useAuthenticationStore } from "../stores/AuthenticationStore";

const Settings = ({ navigation }) => {
    const { signOut } = useAuthenticationStore();
    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: '#F1E6E0' }}>
                <Text variant="displaySmall" style={styles.header}>Settings</Text>

                <Button
                    mode="contained"
                    buttonColor='#F19336'
                    labelStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 16 }}
                    style={{ marginHorizontal: '10%', paddingVertical: 3 }}
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
        fontFamily: 'OpenSans-Bold',
        paddingTop: '40%',
        textAlign: 'center',
        color: '#F19336',
    },
})

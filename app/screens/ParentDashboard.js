import * as React from 'react';
import {observer} from "mobx-react";
import { StyleSheet, View, } from 'react-native';

import { useAuthenticationStore } from "../stores/AuthenticationStore";
import {
    PaperProvider,
    Button,
    Text,
    TextInput,
    HelperText
} from 'react-native-paper';

const ParentDashboard = ({ navigation }) => {
    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: '#F1E6E0' }}>
                <Text variant="displaySmall" style={styles.header}>Parent Dashboard</Text>
            </View>
        </PaperProvider>
    );
}

export default observer(ParentDashboard);

const styles = StyleSheet.create({
    header: {
        flex: 1,
        paddingTop: '40%',
        textAlign: 'center',
        fontWeight: 600,
        color: '#F19336',
    },
})

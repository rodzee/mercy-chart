import * as React from 'react';
import { observer } from "mobx-react";
import { StyleSheet, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, PaperProvider } from 'react-native-paper';
import { useAuthenticationStore } from "../stores/AuthenticationStore";
import TopBar from '../components/TopBar';

const Settings = () => {
    const { signOut } = useAuthenticationStore();
    const navigation = useNavigation();

    return (
        <PaperProvider>
            <TopBar />
            <View style={styles.root}>
                <View style={styles.container}>
                    <View>
                        <Button
                            icon='chevron-right'
                            labelStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, color: '#757575' }}
                            contentStyle={{ flexDirection: 'row-reverse', alignSelf: 'flex-start', gap: 70 }}
                            onPress={() => navigation.navigate('ChildProfile')}>
                            Children Profiles
                        </Button>
                        <Button
                            icon='chevron-right'
                            labelStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, color: '#757575' }}
                            contentStyle={{ flexDirection: 'row-reverse', alignSelf: 'flex-start', gap: 45 }}
                            onPress={() => navigation.navigate('CaretakerProfile')}>
                            Caretakers Profiles
                        </Button>
                    </View>
                    <Button
                        mode="contained"
                        buttonColor='#D92D00'
                        labelStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 16 }}
                        style={{ paddingVertical: 3 }}
                        onPress={() => signOut()}>
                        Sign out
                    </Button>
                </View>
            </View>
        </PaperProvider>
    );
}

export default observer(Settings);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F1E6E0',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        margin: 30,
        padding: 13,
        justifyContent: 'space-between',
        borderRadius: 30,
        backgroundColor: 'white'
    },
})

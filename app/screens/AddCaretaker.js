import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useAuthenticationStore } from "../stores/AuthenticationStore";
import {
    PaperProvider,
    Button,
    Text,
    TextInput,
    HelperText,
} from 'react-native-paper';

const AddCaretaker = () => {
    const {
        name,
        email,
        emailConfirmation,
        errorMessage,
    } = useAuthenticationStore();

    return (
        <PaperProvider>
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.header}>Add Caretaker</Text>
                    <TextInput
                        mode='outlined'
                        label="Name"
                        value={name}
                        selectionColor='#F19336'
                        activeOutlineColor='#757575'
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        style={{ marginBottom: 10, backgroundColor: '#F5F5F5' }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Email"
                        value={email}
                        selectionColor='#F19336'
                        activeOutlineColor='#757575'
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        style={{ marginBottom: 10, backgroundColor: '#F5F5F5' }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Confirm Email"
                        value={emailConfirmation}
                        selectionColor='#F19336'
                        activeOutlineColor='#757575'
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        style={{ backgroundColor: '#F5F5F5' }}
                    />
                    <HelperText type="error" >
                        {errorMessage}
                    </HelperText>

                    <Button
                        mode="contained"
                        buttonColor='#F19336'
                        labelStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 16 }}
                        style={{ marginTop: 20 }}
                        onPress={() => { }}
                    >Add</Button>
                </View>
            </View>
        </PaperProvider>
    )
}

export default AddCaretaker

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
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'white'

    },
    header: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 28,
        color: '#757575',
        textAlign: 'center',
        marginBottom: 30
    },


})

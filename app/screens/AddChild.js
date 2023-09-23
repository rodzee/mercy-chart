import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    PaperProvider,
    Button,
    Text,
    TextInput,
    Avatar,
} from 'react-native-paper';

const AddChild = () => {
    return (
        <PaperProvider>
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.header}>Add Child</Text>
                    <Avatar.Image
                        size={120}
                        style={{ alignSelf: 'center', marginBottom: 30 }}
                        source={require('../../assets/icon.png')} />
                    <TextInput
                        mode='outlined'
                        label="Name"
                        selectionColor='#F19336'
                        activeOutlineColor='#757575'
                        outlineStyle={{ borderRadius: 20, borderColor: '#fff' }}
                        style={{ marginBottom: 10, backgroundColor: '#F5F5F5' }}
                    />
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

export default AddChild

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

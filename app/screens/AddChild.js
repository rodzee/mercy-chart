import React from 'react'
import { View, StyleSheet } from 'react-native'
import { PaperProvider, Button, Text, Avatar } from 'react-native-paper';
import {FormBuilder} from "react-native-paper-form-builder";
import {useForm} from "react-hook-form";

const AddChild = () => {
    const {
        control,
        setFocus,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: { name: '' },
        mode: 'onChange',
        reValidateMode: 'onSubmit'
    });

    return (
        <PaperProvider>
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.header}>Add Child</Text>
                    <Avatar.Image
                        size={120}
                        style={{ alignSelf: 'center', marginBottom: 30 }}
                        source={require('../../assets/icon.png')}
                    />
                    <FormBuilder
                        control={control}
                        setFocus={setFocus}
                        formConfigArray={[
                            {
                                name: 'name',
                                type: 'text',
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    },
                                },
                                textInputProps: {
                                    label: 'Name',
                                    outlineStyle: { borderRadius: 20, borderColor: '#FFF', backgroundColor: '#F5F5F5'  },
                                    selectionColor:'#F19336',
                                    activeOutlineColor:'#757575'
                                },
                            },
                        ]}
                    />
                    <Button
                        mode="contained"
                        buttonColor='#F19336'
                        labelStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 16 }}
                        style={{ marginTop: 20 }}
                        onPress={handleSubmit(({name}) => {
                            console.log(name)
                        })}>
                        Add
                    </Button>
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

import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Text, PaperProvider, Avatar, IconButton} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";

const ChildProfile = () => {
    const navigation = useNavigation();

    return (
        <PaperProvider>
            <View style={styles.root}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Children Profiles</Text>
                        <IconButton
                            icon='account-plus'
                            iconColor='#757575'
                            style={{paddingTop: 14}}
                            onPress={() => navigation.navigate('AddChild')}
                        />
                    </View>
                    <View style={styles.profilesContainer}>
                        <View style={styles.profile} >
                            <Avatar.Image source={require('../../assets/icon.png')} size={26} />
                            <Text style={styles.profileTxt}>Lorenzo</Text>
                            <IconButton icon='chevron-right' />
                        </View>
                        <View style={styles.profile} >
                            <Avatar.Image source={require('../../assets/icon.png')} size={26} />
                            <Text style={styles.profileTxt}>Julie</Text>
                            <IconButton icon='chevron-right' />
                        </View>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )
}

export default ChildProfile

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F1E6E0',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        marginTop: 80,
        margin: 30,
        padding: 13,
        justifyContent: 'space-between',
        borderRadius: 30,
        backgroundColor: 'white'
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 13,
        paddingRight: 13,
    },
    header: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: '#757575',
        textAlign: 'center',
        marginTop: 15,
    },
    profilesContainer: {
        flex: 1,
        padding: 15,
        marginHorizontal: 13,
        marginVertical: '10%',
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileTxt: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: '#757575',
    }
})

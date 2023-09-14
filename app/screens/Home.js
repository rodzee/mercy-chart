import * as React from 'react';
import { observer } from "mobx-react";
import { StyleSheet, View, Pressable } from 'react-native';

import { IconButton, PaperProvider, Text } from 'react-native-paper';

const Chart = () => {
    return (
        <PaperProvider>
            <View style={styles.root}>
                <View style={styles.container}>
                    <View style={styles.timerContainer}>
                        <View>
                            <Text style={styles.hourTxt}>01:12:00 Hour</Text>
                            <Text>Remaining for the reward</Text>
                        </View>
                        <IconButton icon='timer' iconColor='#757575' onPress={() => { }} />
                    </View>
                    <IconButton
                        icon='gift'
                        size={120}
                        iconColor='#FFD426'
                        style={{ flex: 1, justifyContent: 'center', width: '100%' }}
                    />
                    <View style={styles.strikesContainer}>
                        <View style={styles.xContainer}>
                            <IconButton icon='alpha-x-circle' size={60} iconColor='#FFF' />
                            <IconButton icon='alpha-x-circle' size={60} iconColor='#FFF' />
                            <IconButton icon='alpha-x-circle' size={60} iconColor='#FFF' />
                        </View>
                        <Pressable style={styles.tapContainer} onPress={() => { }}>
                            <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 28, color: '#FFF' }}>Double Tap</Text>
                            <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: '#FFF' }}>to add a strike</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </PaperProvider>
    );
}

export default observer(Chart);

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
        padding: 20,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    hourTxt: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: '#F19336'
    },
    strikesContainer: {
        borderRadius: 20,
        backgroundColor: '#F19336'
    },
    xContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tapContainer: {
        borderRadius: 20,
        margin: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5B372',
    }

})

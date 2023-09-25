import { List } from 'react-native-paper';

import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';

const TopBar = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ paddingHorizontal: 16, }}>
                <List.Accordion
                    title="Lorenzo"
                    titleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, textAlign: 'center', color: '#757575' }}
                    rippleColor='#F5F5F5'
                    style={{ backgroundColor: '#fff' }}
                    left={
                        props => <List.Icon {...props}
                            icon="account-circle"
                            color='#757575' />
                    }>
                    <List.Item title="Julie"
                        left={props => <List.Icon {...props} icon="account-circle" />}
                        titleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, textAlign: 'center', color: '#757575' }}
                    />
                    <List.Item title="Third Child"
                        left={props => <List.Icon {...props} icon="account-circle" />}
                        titleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, textAlign: 'center', color: '#757575' }}
                    />
                </List.Accordion>
            </View>
        </SafeAreaView>
    );
}

export default TopBar

const styles = StyleSheet.create({
    safeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
    }
})
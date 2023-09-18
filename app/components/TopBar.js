import { List } from 'react-native-paper';

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

const TopBar = () => {

    return (
        <SafeAreaView style={{ backgroundColor: '#F1E6E0' }}>
            <View style={{ marginBottom: 20 }}>
                <List.Accordion
                    title="Lorenzo"
                    titleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, textAlign: 'center', color: '#757575' }}
                    style={{ backgroundColor: '#F1E6E0', paddingLeft: 10 }}
                    rippleColor='#F5F5F5'
                    left={
                        props => <List.Icon {...props}
                            icon="account-circle"
                            color='#757575' />
                    }>
                    <List.Item title="Julie"
                        left={props => <List.Icon {...props} icon="account-circle" />}
                        titleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, textAlign: 'center', color: '#757575', marginRight: 30 }}
                        style={{ backgroundColor: '#F5F5F5', paddingLeft: 10 }}
                    />
                    <List.Item title="Third Child"
                        left={props => <List.Icon {...props} icon="account-circle" />}
                        titleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, textAlign: 'center', color: '#757575', marginRight: 30 }}
                        style={{ backgroundColor: '#F5F5F5', paddingLeft: 10 }}
                    />
                </List.Accordion>
            </View>
        </SafeAreaView>
    );
}

export default TopBar
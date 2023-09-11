import { List } from 'react-native-paper';

import React from 'react'

const TopBar = () => {
    const [expanded, setExpanded] = React.useState(true);

    return (
        <List.Accordion
            title="Lorenzo"
            titleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 20, textAlign: 'center', color: '#757575' }}
            rippleColor='#F5F5F5'
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
    );
}

export default TopBar
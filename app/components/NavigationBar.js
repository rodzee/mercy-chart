import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {observer} from "mobx-react";
import Chart from "../screens/Chart";
import Parent from "../screens/Parent";
import Calendar from "../screens/Calendar";
import Settings from "../screens/Settings";

const NavigationBar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'chart', title: 'Chart', focusedIcon: 'gift', unfocusedIcon: 'gift-outline' },
        { key: 'parent', title: 'Parent', focusedIcon: 'account-circle'},
        { key: 'calendar', title: 'Calendar', focusedIcon: 'calendar' },
        { key: 'settings', title: 'Settings', focusedIcon: 'cog' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        chart: Chart,
        parent: Parent,
        calendar: Calendar,
        settings: Settings,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            activeColor='#F19336'
            renderScene={renderScene}
            labeled={false}
            barStyle={{ backgroundColor: '#FFF' }}
            theme={{
                colors: {
                    secondaryContainer: 'transparent'
                }
            }}
        />
    );
};

export default observer(NavigationBar)
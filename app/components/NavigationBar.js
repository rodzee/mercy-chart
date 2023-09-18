import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { observer } from "mobx-react";
import Home from "../screens/Home";
import History from "../screens/History";
import Settings from "../screens/Settings";

const NavigationBar = ({children}) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'gift', unfocusedIcon: 'gift-outline' },
        { key: 'history', title: 'History', focusedIcon: 'history' },
        { key: 'settings', title: 'Settings', focusedIcon: 'cog' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        history: History,
        settings: Settings,
    });

    return (
    <>
      {children}
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        activeColor='#F19336'
        renderScene={renderScene}
        labeled={true}
        barStyle={{ backgroundColor: '#FFF', borderTopColor: '#F1C498', borderTopWidth: 1, }}
        theme={{
          colors: {
            secondaryContainer: 'transparent'
          }
        }}
      />
    </>
    );
};

export default observer(NavigationBar)

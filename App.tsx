import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

import { SCREENS } from './app/utilities/constants';
import HomePage from './app/screens/Home';
import BottomNavBar from './app/components/BottomNavBar';
import { HeaderBar } from './app/components/HeaderBar';
import TrendPage from './app/screens/Trend';
import RewardsPage from './app/screens/Rewards';
import CheckInPage from './app/screens/Check-In';
import MenuPage from './app/screens/Menu';
import ItemDetailPage from './app/screens/ItemDetail';
import { HeaderTextBar } from './app/components/HeaderTextBar';

const App = (props: any) => (
  <Provider store={store}>
    <Router {...props} >
      <Stack
        {...props}
        key="root"
        navTransparent
        navigationBarStyle={{
          backgroundColor: '#fff',
          margin: 0,
          marginBottom: StatusBar.currentHeight,
        }}>
        <Scene
          initial
          key={SCREENS.MAIN}
          tabs
          tabBarPosition='bottom'
          tabBarStyle={{
            backgroundColor: '#176389',
          }}
          tabBarComponent={(props) => <>
            <BottomNavBar {...props} />
          </>}
          hideNavBar
        >
          <Scene key={SCREENS.HOME} component={HomePage} />
          <Scene key={SCREENS.TREND} component={TrendPage} />
          <Scene key={SCREENS.CHECK_IN} component={CheckInPage} />
          <Scene
            initial
            key={SCREENS.REWARDS}
            component={RewardsPage}
            navBar={() => <HeaderBar {...props} title="Rewards" backButtonEnabled />} />
          <Scene key={SCREENS.MENU} component={MenuPage} />
        </Scene>
        <Scene key={SCREENS.REWARD_DETAIL} component={ItemDetailPage} navBar={() => <HeaderTextBar {...props} />} />
      </Stack>
    </Router>
  </Provider>
);

export default App;
import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { StatusBar, Text } from 'react-native';

import { SCREENS } from './app/utilities/constants';
import HomePage from './app/screens/Home';
import BottomNavBar from './app/components/BottomNavBar';
import { HeaderBar } from './app/components/HeaderBar';
import TrendPage from './app/screens/Trend';
import RewardsPage from './app/screens/Rewards';
import CheckInPage from './app/screens/Check-In';
import MenuPage from './app/screens/Menu';

// const App = (props: any) => {
//   return (
//     <>
//       <Text style={{marginTop: 50, color: 'red'}}>Test</Text>
//     </>
//   );
// }

const App = (props: any) => (
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
        <Scene
          initial
          key={SCREENS.REWARDS}
          component={RewardsPage}
          navBar={() => <HeaderBar {...props} title="Rewards" backButtonEnabled />} />
        <Scene key={SCREENS.CHECK_IN} component={CheckInPage} />
        <Scene key={SCREENS.MENU} component={MenuPage} />

      </Scene>
    </Stack>
  </Router>
);

export default App;
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Images from '../../images';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { SCREENS } from '../../utilities/constants';
import { TabIcon } from './bottomTabIcon';

const { Menu, Home, Trend, Rewards, CheckIn } = Images;

const BottomNavBar = (props: any) => {
    const { state } = props.navigation || {};
    const currentTab = (state || {}).index;
    const tabs = [{
        title: "Home",
        icon: Home,
        action: () => {
            Actions[SCREENS.HOME]({ refresh: true });
        }
    },
    {
        title: "Trend",
        icon: Trend,
        action: () => {
            Actions[SCREENS.TREND]({ refresh: true });
        }
    }, {
        title: "Check-In",
        icon: CheckIn,
        action: () => {
            Actions[SCREENS.CHECK_IN]({ refresh: true });
        },
        overrideFill: "#ffd119",
        overrideStyle: {}
    }, {
        title: "Rewards",
        icon: Rewards,
        action: () => {
            Actions[SCREENS.REWARDS]({ refresh: true });
        }
    }, {
        title: "Menu",
        icon: Menu,
        action: () => {
            Actions[SCREENS.MENU]({ refresh: true });
        }
    }]
    return (
        <View style={styles.base}>
            {
                tabs.map((tab, index) => (
                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={tab.action}
                    >
                        <TabIcon
                            Icon={tab.icon}
                            fill={currentTab == index ? "#ffd119" : "#fff"}
                            overrideFill={tab.overrideFill}
                            overrideStyle={tab.overrideStyle}
                            textFill={currentTab == index ? "#ffd119" : "#fff"}
                            title={tab.title}
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

export default BottomNavBar;
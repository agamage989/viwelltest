import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import styles from './styles';
import Images from '../../images';
import { Actions } from 'react-native-router-flux';

const { Logo, Bell, Calendar, Diamond } = Images;

export const HeaderBar = (props: any) => {
    return (
        <View style={styles.base}>
            <View style={styles.logoColumn}>
                <Image source={Logo} style={styles.logoIcon} resizeMode='contain' />
            </View>
            <View style={styles.actionColumn}>
                <View style={styles.actionColumnItem}>
                    <TouchableOpacity
                        disabled
                        style={{ paddingVertical: 13, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            Actions.pop();
                        }}
                    >
                        <Text style={{ color: "#fff", marginRight: 10 }}>2381</Text>
                        <Diamond fill="#fff" width={30} height={30} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ paddingVertical: 13, paddingHorizontal: 10, }}
                        onPress={() => {
                            Actions.pop();
                        }}
                    >
                        <Calendar fill="#fff" width={40} height={40} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ paddingVertical: 13, paddingHorizontal: 10, }}
                        onPress={() => {
                            Actions.pop();
                        }}
                    >
                        <Bell fill="#fff" width={32} height={32} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View
                style={styles.backColumn}>
                {props.backButtonEnabled && (
                    <TouchableOpacity
                        style={{ paddingVertical: 13 }}
                        onPress={() => {
                            Actions.pop();
                        }}
                    >
                        <BackButton />
                    </TouchableOpacity>
                )}
            </View>
            <View
                style={styles.logoColumn}>
                <Logo overrideBase={{ width: 150, height: 55 }} />
            </View>
            <View
                style={styles.actionColumn}>
                {props.actionButtonEnabled && (
                    <TouchableOpacity
                        onPress={props.actionButtonFunc}
                    >
                        <ActionButton />
                    </TouchableOpacity>
                )}
            </View> */}
        </View>
    );
};

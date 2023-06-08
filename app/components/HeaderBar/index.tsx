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
                        <Text style={{ color: "#fff", marginRight: 10, fontSize: 16, }}>2810</Text>
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
        </View>
    );
};

import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import styles from './styles';
import Images from '../../images';
import { Actions } from 'react-native-router-flux';

const { Back } = Images;

export const HeaderTextBar = (props: any) => {
    return (
        <View style={styles.base}>
            <View style={styles.logoColumn}>
                <TouchableOpacity onPress={() => Actions.pop()}>
                    <Back fill="#fff" width={30} height={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

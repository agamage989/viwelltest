import React from 'react';
import { Bullets } from 'react-native-easy-content-loader';

export const EmptyTagsLoader = () => {
    return (<Bullets active avatarStyles={{ display: 'none', }} primaryColor='#eee' listSize={6} tHeight={20} />);
};
import React from 'react';
import { Bullets } from 'react-native-easy-content-loader';

export const EmptyCardsLoader = () => {
    return (<Bullets active avatarStyles={{ display: 'none', }} primaryColor='#eee' listSize={6} tWidth={'100%'} tHeight={200} />);
};
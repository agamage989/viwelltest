import React from "react";
import { Text } from 'react-native';
import styles from "./styles";

export const TabIcon = (props: any) => {
    const { Icon, fill, textFill, title, overrideStyle, overrideFill } = props || {};
    return (
        <>
            <Icon
                fill={overrideFill || fill}
                width={32}
                height={32}
                style={[styles.activeActionBtnIconHighlighter, overrideStyle]} />
            <Text style={{ color: textFill }}>{title}</Text>
        </>
    )
}
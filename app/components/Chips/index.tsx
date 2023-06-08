import React from "react";
import { Text, View } from "react-native";

export const ChipName = (props: any) => {
    const { name, selected, index } = props || {};
    return (
        <View style={{
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "#353535",
            marginHorizontal: index > 0 ? 10 : 0,
            borderColor: selected ? "#ffd119" : "#353535",
            borderWidth: 1,
        }}>
            <Text style={{ color: selected ? "#ffd119" : "#fff", fontSize: 16 }}>{name}</Text>
        </View>
    )
}
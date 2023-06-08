import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import Images from "../../images";
import { Actions } from "react-native-router-flux";
import { SCREENS } from "../../utilities/constants";

const { GiftBox, Diamond } = Images;

export const RewardListItem = (props: any) => {
    const { title, brand, price } = props || {};
    return (
        <TouchableOpacity
            onPress={() => {
                Actions[SCREENS.REWARD_DETAIL]({ rewardItem: props });
            }}
            style={{
                borderRadius: 10,
                backgroundColor: "#353535",
                borderWidth: 1,
                height: 225,
                overflow: 'hidden',
                marginVertical: 10,
            }}>
            <Image source={GiftBox} resizeMode="cover" style={{ width: '100%', height: 225 }} />
            <View style={{ width: '100%', height: 225, backgroundColor: '#444', position: 'absolute', top: 0, opacity: 0.4 }} />
            <View style={{ width: '100%', height: 225, position: 'absolute', top: 0, padding: 10, }}>
                <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>{title}</Text>
                <Text style={{ color: "#fff", fontSize: 20, }}>{brand}</Text>

                <View
                    style={{
                        borderRadius: 10,
                        backgroundColor: "#353535CC",
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flex: 0,
                        maxWidth: 150,
                        position: 'absolute',
                        bottom: 10,
                        left: 10
                    }}
                >
                    <Text style={{ color: "#fff", marginRight: 10 }}>{`Get it for ${price}`}</Text>
                    <Diamond fill="#fff" width={30} height={30} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
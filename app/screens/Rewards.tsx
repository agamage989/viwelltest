import React, { useState } from "react";
import { Text, ScrollView, View, TouchableOpacity, StyleSheet } from "react-native";
import { ChipName } from "../components/Chips";
import { RewardListItem } from "../components/RewardListItem";

import Images from "../images";

const { Next } = Images;

const RewardsPage = () => {
    const [tags, setTags] = useState([{
        name: "All",
        selected: true,
    }, {
        name: "Electronics & Communication",
        selected: false,
    }, {
        name: "Fashion & Accessories",
        selected: false,
    }, {
        name: "Games",
        selected: false,
    }]);

    const [rewards, setRewards] = useState([{
        title: "GET 5% OFF Dropkicks AED",
        brand: "Dropkicks",
        price: 500,
    }, {
        title: "Get upto 35% OFF Namshi AED",
        brand: "Namshi",
        price: 800,
    }, {
        title: "Get upto 35% OFF Namshi AED",
        brand: "Namshi",
        price: 800,
    }]);

    return (
        <ScrollView
            nestedScrollEnabled
            style={style.scrollViewMain}
            contentContainerStyle={style.scrollViewContainer}
        >
            <View style={style.availableRewardsHeader}>
                <View style={style.availableRewardsTitle}>
                    <Text style={style.availableRewardsTitleText}>Available Rewards</Text>
                </View>
                <View style={style.myRewardsBtnContainer}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={style.myRewardsBtn}
                    >
                        <Text style={style.myRewardsBtnText}>My Rewards</Text>
                        <Next width={20} height={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginVertical: 20 }}>
                <Text style={{ color: "#fff", fontSize: 14, lineHeight: 18, }}>Treat yourself by checking out the variety of rewards you can swap your points for Keep on progressing to gain more points and rewards</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10, borderColor: "#303030", borderWidth: 1, }} />
            <ScrollView horizontal style={{ marginVertical: 20 }}>
                {
                    tags.map((chip: any, index: number) => (<TouchableOpacity disabled={chip.selected} onPress={() => { }}><ChipName {...chip} index={index} /></TouchableOpacity>))
                }
            </ScrollView>
            {
                rewards.map((reward: any) => (<RewardListItem {...reward} />))
            }
        </ScrollView>)
};

const style = StyleSheet.create({
    scrollViewMain: {
        flex: 1,
        backgroundColor: "#1b1b1b",
        padding: 10,
        paddingHorizontal: 20,
    },
    scrollViewContainer: {
        paddingBottom: 200
    },
    availableRewardsHeader: { flex: 3, flexDirection: 'row' },
    availableRewardsTitle: { flex: 2, flexDirection: 'column' },
    availableRewardsTitleText: { color: "#fff", fontWeight: "bold", fontSize: 24 },
    myRewardsBtnContainer: { flex: 1.5, flexDirection: 'column', alignContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'flex-end' },
    myRewardsBtn: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#353535",
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'center'
    },
    myRewardsBtnText: { color: "#ffd119", fontWeight: "bold", fontSize: 16, marginRight: 10 },


});

export default RewardsPage;
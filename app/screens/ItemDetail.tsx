import React from "react";
import { Alert, Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { DateTime, DurationObjectUnits } from "luxon";

import Images from "../images";


const { GiftBox, Diamond, Chat } = Images;

const ItemDetailPage = (props: any) => {
    const { state } = props.navigation;
    const { params } = state || {};
    const { rewardItem } = params || {};
    const { title, date, price, brand } = rewardItem || {};

    const diffNow: DurationObjectUnits = ((DateTime.fromISO(date)).diff(DateTime.now(), ["days"])).toObject();

    return (
        <ScrollView style={style.scrollViewMain} contentContainerStyle={style.scrollViewContainer}>
            <View style={style.imageBGContainer}>
                <Image source={GiftBox} style={{ width: "100%", maxHeight: 300 }} resizeMode="cover" />
                <View style={{ width: '100%', height: 300, backgroundColor: '#444', position: 'absolute', top: 0, opacity: 0.4, zIndex: 888 }} />
                <Text style={{ color: "#fff", position: "absolute", bottom: 10, left: 10, zIndex: 999, elevation: 2, fontSize: 28, fontWeight: "bold" }}>{title}</Text>
            </View>
            <View style={style.contentContainer}>
                <View style={style.contentRow}>
                    <Text style={style.contentText}>{`${Math.round(diffNow.days || 0)} days left  .  ${price}`}</Text>
                    <Diamond width={20} height={20} />
                </View>
                <View style={style.contentRow}>
                    <Text style={style.contentText}>{`${brand}`}</Text>
                </View>
                <View style={style.contentRow}>
                    <Text style={[style.contentText, { fontSize: 26, fontWeight: 'bold', }]}>{`${title}`}</Text>
                </View>
                <View style={style.contentRow}>
                    <Text style={[style.contentText, { fontSize: 20 }]}>{`${title}`}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => { Alert.alert("Successfully Redeemed!") }} style={style.redeemBtn}>
                <View>
                    <Text style={style.redeemBtnText}>Redeem</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={style.chatBtn}>
                <View>
                    <Chat fill="#ffd119" style={{ color: "#1b1b1b" }} width={30} height={30} />
                </View>
            </TouchableOpacity>
        </ScrollView>);
};

const style = StyleSheet.create({
    scrollViewMain: {
        flex: 1,
        backgroundColor: "#1b1b1b",
    },
    scrollViewContainer: {
        flex: 1,
        flexDirection: "column"
    },
    imageBGContainer: { flex: 0, maxHeight: 300, overflow: "hidden" },
    contentContainer: { flex: 1, flexDirection: "column", padding: 20, },
    contentRow: { flex: 0, flexDirection: "row", alignContent: 'center', alignItems: 'center' },
    contentText: { color: "#fff", marginRight: 10, fontSize: 16, lineHeight: 44 },
    redeemBtn: { position: "absolute", bottom: 10, alignSelf: 'center', width: '90%', borderRadius: 10, padding: 15, borderWidth: 1, backgroundColor: '#ffd119', overflow: 'hidden' },
    chatBtn: { position: "absolute", bottom: 100, right: 20, alignSelf: 'center', borderRadius: 50, padding: 20, elevation: 4, borderWidth: 1, backgroundColor: '#353535', overflow: 'hidden' },
    redeemBtnText: { color: "#1b1b1b", textAlign: "center", marginRight: 10, fontSize: 24, fontWeight: "bold" },
});


export default ItemDetailPage;
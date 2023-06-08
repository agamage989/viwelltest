import { StyleSheet } from "react-native";
import { hasNotch } from "react-native-device-info";

export default StyleSheet.create({
    base: {
        flex: 1,
        maxHeight: hasNotch() ? 100 : 85,
        paddingBottom: hasNotch() ? 5 : 0,
        flexDirection: 'row',
        backgroundColor: '#4c4c4c',
        borderWidth: 1,
        borderColor: '#176389',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
    },
    actionBtn: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    activeActionBtnIconHighlighter: { position: 'relative', bottom: 5 },
});
import { StyleSheet } from "react-native";
import { hasNotch } from "react-native-device-info";

export default StyleSheet.create({
    base: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        minHeight: hasNotch() ? 120 : 100,
        paddingBottom: hasNotch() ? 5 : 0,
        flexDirection: 'row',
        backgroundColor: '#4c4c4c',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        zIndex: 99999,
        elevation: 1,
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
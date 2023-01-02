import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    headerContainer: {
        backgroundColor: '#0D0D0D',
        width: '100%',
        height: 173,
        alignItems: 'center',
    },
    logoImage: {
        marginTop: 70
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
        padding: 24,
        paddingTop: 0
    },
    input: {
        backgroundColor: '#262626',
        flex: 1,
        height: 54,
        borderRadius: 6,
        padding: 16,
        fontSize: 16,
        marginRight: 4,
        color: '#F2F2F2'
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#F2F2F2',
        fontSize: 16
    },
    categories: {
        marginTop: 55,
        flexDirection: 'row',
        padding: 24,
        paddingTop: 0,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },
    category: {
        flexDirection: 'row',
        gap: 100
    },
    createdText: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: '700'
    },
    completedText: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: '700'
    },
    counterContainer: {
        backgroundColor: '#333333',
        width: 25,
        height: 19,
        borderRadius: 15,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: '700'
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clipboardImage: {
        marginBottom: 16,
        marginTop: 48
    },
    boldEmptyText: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '700'
    },
    emptyText: {
        color: '#808080',
        fontSize: 14,
    }
});
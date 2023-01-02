import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#333333',
        flex: 1,
        height: 64,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 8,
        padding: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkButton: {
        backgroundColor: 'transparent',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginLeft: 12,
        marginRight: 8,
        borderWidth: 2,
        borderColor: '#4EA8DE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkIcon: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '900'
    },
    textContainer:{
        justifyContent: 'flex-start',
        flex: 1,
        marginRight: 18
    },
    taskText: {
        color: '#F2F2F2',
        fontSize: 14,
        fontWeight: '400'
    },
    trashButton: {
        height: 54,
        width: 54,
        alignItems: 'center',
        justifyContent: 'center'
    },
    trashImage: {
        width: 12.48,
        height: 14
    }
});


//        textDecorationLine: completed  === true ? 'line-through' : 'none'

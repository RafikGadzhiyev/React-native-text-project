import { StyleSheet } from "react-native";

export const CountStyles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        width: '100%'
    },
    text: {
        fontSize: 60,
        fontWeight: 'bold',
    },

    rowContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'stretch',
        padding: 25,
        justifyContent: 'center',
    },

    touchableContainer: {
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    incrementButton: {
        backgroundColor: 'rgba(50, 100, 50, 1)',
    },
    dicrementButton: {
        backgroundColor: 'rgba(100, 50, 50, 1)'
    },
    refreshButton: {
        backgroundColor: 'rgba(200, 200, 200, 1)'
    },
    touchText: {
        fontSize: 25,
        color: "#fff"
    },
    refreshTouchText: {
        color: "#000"
    },
    touchIcon: {
        paddingRight: 10
    },
    touchBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
    },

    redColor: {
        color: 'red'
    },
    greenColor: {
        color: 'green'
    },

});
import { CountStyles as styles } from "./CountStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import React from "react";


// export const Count = () => {
//     const [count, setCount] = React.useState(0);

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text>{count}</Text>
//         </SafeAreaView>
//     )
// }

export default function Count() {
    const [count, setCount] = React.useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{
                    ...styles.text,
                    ...styles[count === 0 ? '' : count > 0 ? 'greenColor' : 'redColor']
                }}
            >{count}</Text>
            <View style={styles.rowContainer}>
                <TouchableHighlight
                    style={[styles.touchableContainer, styles.incrementButton]}
                    onPress={() => setCount(prev => prev + 1)}
                    underlayColor='rgba(100, 200, 100, 1)'
                >
                    <View
                        style={styles.touchBlock}
                    >
                        <Icon
                            name="plus"
                            style={[styles.touchText, styles.touchIcon]}
                        />
                        <Text
                            style={styles.touchText}
                        >Add one</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.touchableContainer, styles.dicrementButton]}
                    onPress={() => setCount(prev => prev - 1)}
                    underlayColor='rgba(200, 100, 100, 1)'
                >
                    <View
                        style={styles.touchBlock}
                    >
                        <Icon
                            name="minus"
                            style={[styles.touchText, styles.touchIcon]}
                        />
                        <Text
                            style={styles.touchText}
                        >Remove one</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.touchableContainer, styles.refreshButton]}
                    onPress={() => setCount(() => 0)}
                    underlayColor='rgba(175, 175, 175, 1)'
                >
                    <View
                        style={styles.touchBlock}
                    >
                        <Icon
                            name='refresh'
                            style={[styles.touchText, styles.refreshTouchText, styles.touchIcon]}
                        />
                        <Text
                            style={[styles.touchText, styles.refreshTouchText]}
                        >Refresh</Text>

                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

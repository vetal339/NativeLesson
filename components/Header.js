import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text styles={styles.head}>Список дел</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver',
        alignItems: 'center',

    },
    head: {
        fontSize: 18,
        color: '#fc0303',
    }
});
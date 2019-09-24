import React from 'react';
import { View, Text, Button, Card, StyleSheet } from 'react-native';
import Colors from '../Constants/Colors';


const NumberContainer = props => {

    return(
        
        <View style={styles.numberDisplay}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
        );
};

const styles = StyleSheet.create({
    numberDisplay: {
        borderColor: Colors.accent,
        borderWidth: 2,
        borderRadius: 100,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        margin: 10,
        fontSize: 22,
        color: Colors.accent
    }
});

export default NumberContainer;

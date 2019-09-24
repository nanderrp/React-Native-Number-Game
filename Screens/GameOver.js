import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; 
import Colors from '../Constants/Colors';

const GameOver = props => {
    return(
    <View style={styles.screen}>
        <Text style={styles.text}>GAME OVER!</Text>
        <Text style={styles.text}>Number of Rounds: {props.roundsNumber}</Text>
        <Text style={styles.text}>Number was: {props.userNumber}</Text>
        <Button title="NEW GAME" onPress={props.onNewGame} style={styles.button}/>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        alignItems: 'center',
        fontSize: 25,
    },
    button:{
        alignItems: 'center',
        color: 'white',
        backgroundColor: Colors.primary
    }
});

export default GameOver;
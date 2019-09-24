import React, { useState, useRef, useEffect }from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../Components/NumberContainer';
import CardComponent from '../Components/Card';



const generateRandom = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max-min)) + min;
    if (randomNum === exclude) {
        return generateRandom(min, max, exclude);
    } else {
        return randomNum;
    }
};

const GameScreen = props => {
    const [ currentGuess, setCurrentGuess ] = useState(generateRandom(1, 100, props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [rounds, setRounds] = useState(0);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || 
            (direction === 'greater') && currentGuess > props.userChoice) {
            Alert.alert("Don't Lie!", "You know this isn't right...", [{text: 'Oops!', style: 'cancel'}]);
         return;
        }

        if(direction === 'lower') {
        currentHigh.current = currentGuess
        }

        else {currentLow.current = currentGuess};

        const NextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess);

        setCurrentGuess(NextNumber);
        setRounds(curRounds => curRounds + 1);
        };

        useEffect(() => {
            if (currentGuess === props.userChoice) {
                props.onGameOver(rounds);
            }
        }, [currentGuess, props.userChoice, props.onGameOver]);

    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <CardComponent style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')}/>
            </CardComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: '80%'

    }
});

export default GameScreen;
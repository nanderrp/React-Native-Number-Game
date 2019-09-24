 import React, { useState } from 'react';
 import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
 import CardComponent from '../Components/Card';
 import Colors from '../Constants/Colors';
 import Input from '../Components/Input';
 import NumberContainer from '../Components/NumberContainer';

 const StartScreen = props => {

    const [ enteredValue, setEnteredValue ] = useState('');
    const [ confirmed, setConfirmed ] = useState(false);
    const [ selectedNumber, setSelectedNumber ] = useState();

    const InputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g), '');
    };

    const resetInputHandler = () => {
        setEnteredValue('');
    };

    const confrimInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number must be between 1 - 99.' [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);   
        setSelectedNumber(chosenNumber); 
        setEnteredValue('');
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
        <CardComponent style={styles.chosenNumCard}>
        <Text>Chosen Number:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Game" onPress={() => {props.onStart(selectedNumber)}}/>
        </CardComponent>
    }

     return (
         <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
         <View style={styles.screen}>
             <Text style={styles.title}>START GAME</Text>
                <CardComponent style={styles.inputContainer}>
                <Text>Choose Your Number</Text>
                <Input style={styles.input} 
                       blurOnSubmit 
                       autoCapitalize="none" 
                       autoCorrect={false} 
                       keyboardType="number-pad" 
                       maxLength={2}
                       onChangeText={InputHandler}
                       value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                    <View style={styles.button}><Button title="Choose" onPress={confrimInputHandler} color={Colors.primary}/></View>
                </View>
            </CardComponent>
            {confirmedOutput}
         </View>
         </TouchableWithoutFeedback>
     );
 };

 const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    chosenNumCard: {
        marginTop: 20,
    },
 });  

  
 export default StartScreen;
 
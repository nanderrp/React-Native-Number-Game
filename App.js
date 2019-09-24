import React, { useState } from 'react';
import Header from './Components/Header';
import StartScreen from './Screens/StartScreen';
import { StyleSheet, View } from 'react-native';
import GameScreen from './Screens/GameScreen';
import GameOver from './Screens/GameOver';

const App = () => {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const GameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  
  }

  let content = <StartScreen onStart={startGameHandler}/>;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onNewGame={newGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess the Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;

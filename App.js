/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Header from './components/header';
import StartGame from './screens/startGame';
import GameScreen from './screens/gameScreen';
import Color from './constants/colors';
import EndGame from './screens/endGame';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGame = userValue => {
    setUserNumber(userValue);
  };
  const endGameHandler = enteredNumber => {
    setGuessRounds(enteredNumber);
  };
  const startGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let screenOn = <StartGame onStartGame={startGame}/>;

  if (userNumber && guessRounds < 1){
    // console.log('UserNumber=', userNumber);
    screenOn = <GameScreen userValue={userNumber} onGameEnd={endGameHandler}/>;
  } else if (guessRounds){
    screenOn = <EndGame round={guessRounds} onRestart={startGameHandler}/>;
  }


  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {screenOn}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.light,
  },
});

export default App;

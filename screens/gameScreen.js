/* eslint-disable prettier/prettier */

import React, {useState, useRef} from 'react';
import {Text, View, Button, StyleSheet, Alert, FlatList, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

import Color from './../constants/colors';
import Card from './../components/card';
// import TextBox from './../components/textBox';
import TextView from './../components/textView';

const randomNumberGenerator = (min, max) => {
    let random;
    let randomRatio = (Math.random());
    if (randomRatio > 0.5){
        random = Math.floor(randomRatio * (max - min) + min);
    } else {
        random = Math.ceil(randomRatio * (max - min) + min);
    }
    return random;
};

const GameScreen = props => {
    // let cheatAlert;
    // let cheatText = "Don't Cheat";

    // const [min,setMin] = useState(0);
    // const [max,setMax] = useState(99);
    const currentMin = useRef(1);
    const currentMax = useRef(99);
    const [currentGuess, setCurrentGuess] = useState(randomNumberGenerator(0,99));
    const [round, setRound] = useState(0);
    const [guesses, setGuesses] = useState([]);
    // useEffect(() => {}, [min, max]);

    const guessHigher = () => {
        if (currentGuess >= props.userValue){
            Alert.alert('Don\'t Cheat', 'You now that\'s not valid', [{text: 'Sorry...', style: 'cancel'}]);
            // console.log('Cheating');
            // console.log(cheatAlert);
        } else {
            // console.log(currentMin.current, '   ', currentMax.current, '   ', currentGuess);
            currentMin.current = currentGuess + 1;
            setCurrentGuess(randomNumberGenerator(currentMin.current,currentMax.current));
            setRound(round + 1);
            setGuesses(currentGuesses => [...currentGuesses, {id: round + 1, value: currentGuess}]);
        }
    };

    const guessLower = () => {
        if (currentGuess <= props.userValue){
            Alert.alert('Don\'t Cheat', 'You now that\'s not valid', [{text: 'Sorry...', style: 'cancel'}]);
            // console.log('Cheating');
        } else {
            // console.log(currentMin.current, '   ', currentMax.current, '   ', currentGuess);
            currentMax.current = currentGuess;
            setCurrentGuess(randomNumberGenerator(currentMin.current,currentMax.current));
            setRound(round + 1);
            setGuesses(currentGuesses => [...currentGuesses, {id: round + 1, value: currentGuess}]);
        }
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text>Computer Guess</Text>
                <TextView>{currentGuess}</TextView>
                <View style={styles.buttonContainer}>
                    <View style={styles.btnView}><Button title="Guess A Lower One" style={styles.button} color={Color.tertiary} onPress={guessLower}/></View>
                    <View style={styles.btnView}><Button title="Hey! You Got It" style={styles.button} color={Color.primary} onPress={() => props.onGameEnd(round)}/></View>
                    <View style={styles.btnView}><Button title="Guess A Higher One" style={styles.button} color={Color.secondary} onPress={guessHigher}/></View>
                </View>
            </Card>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={guesses}
                renderItem={({item}) => {
                    return (
                        <TextView>Guess {item.id} is {item.value}</TextView>
                    );
                }}
                showsVerticalScrollIndicator ={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'trans',
        marginTop: 20,
        padding: 10,
    },
    card: {
        marginBottom: 10,
        width: '80%',
    },
    buttonContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        // marginTop: 20,
    },
    btnView: {
        width: '80%',
        margin: 10,
        padding: 10,
    },
    button: {
        padding: 10,
    },
});

export default GameScreen;

/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

import Color from './../constants/colors';
import Card from './../components/card';
import TextBox from './../components/textBox';
import TextView from './../components/textView';

const StartGame = props => {
    let userValue;

    const [enteredText, setEnteredText] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [confirmValue, setConfirmValue] = useState('');

    const textValidator = textValue => {
        setEnteredText(textValue.replace(/[^0-9]/g, ''));
    };

    const resetButton = () => {
        setEnteredText('');
        setConfirmed(false);
    };

    const confirmButton = () => {
        const a = parseInt(enteredText, 10);
        if (isNaN(a) || a < 1 || a > 99){
            Alert.alert('Invalid Input', 'Please enter a number between 0 and 100 (excluding)', [{text: 'OK', style: 'destructive', onPress: resetButton}]);
            // console.log('Invalid');
            return;
        }
        setConfirmValue(a);
        setEnteredText('');
        setConfirmed(true);
        Keyboard.dismiss();
    };

    if (confirmed) {
        userValue = (
            <Card>
                <Text style={styles.commonText}>Your Number</Text>
                <TextView>{confirmValue}</TextView>
                <Button title="Start Game" color={Color.tertiary} onPress={() => props.onStartGame(confirmValue)} />
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() =>{Keyboard.dismiss();}}>
            <View style={styles.screen}>
                <Text style={styles.title}>
                    Welcome to the game!
                </Text>
                <Card>
                    <Text style={styles.commonText}>Enter a Number</Text>
                    <TextBox blurOnSubmit={true} autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={textValidator} value={enteredText}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.btnView}><Button style={styles.button} title="Reset" color={Color.secondary} onPress={resetButton}/></View>
                        <View style={styles.btnView}><Button style={styles.button} title="Confirm" color={Color.primary} onPress={confirmButton}/></View>
                    </View>
                </Card>
                {userValue}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'trans',
        marginTop: 20,
        padding: 10,
    },
    title: {
        fontSize: 30,
        color: Color.secondary,
        fontFamily: 'Kanit-Regular',
    },
    commonText: {
        color: Color.primary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    btnView: {
        width: '40%',
    },
    button: {
        padding: 10,
    },
});

export default StartGame;

/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Button, Image, Text, StyleSheet} from 'react-native';

import Color from './../constants/colors';
import Card from './../components/card';
// import TextBox from './../components/textBox';
import TextView from './../components/textView';

const EndGame = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/game_over.png')} resizeMode="cover" />
                </View>
                <TextView>Game take <Text style={styles.highlight}>{props.round}</Text> round to complete.</TextView>
                <View style={styles.btnView}><Button title="Play Again" style={styles.button} color={Color.primary} onPress={() => props.onRestart() }/></View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        marginTop: 0,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: Color.primary,
        borderWidth: 3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    btnView: {
        width: '80%',
        margin: 10,
        padding: 10,
    },
    button: {
        padding: 10,
    },
    highlight: {
        color: Color.secondary,
        fontWeight: 'bold',
    },
});

export default EndGame;

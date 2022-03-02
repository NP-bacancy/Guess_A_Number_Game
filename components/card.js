/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Color from './../constants/colors';

const Card = props => {
    return (
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        padding: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Color.light,
        backgroundColor: Color.light,
        marginTop: 20,
        elevation: 10,
    },
});

export default Card;

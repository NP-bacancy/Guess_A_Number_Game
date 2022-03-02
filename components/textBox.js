/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Color from './../constants/colors';

const TextBox = props => {
    return <TextInput {...props} style={{...styles.textBox,...props.style}} />;
};

const styles = StyleSheet.create({
    textBox: {
        // height: 30,
        width: '100%',
        backgroundColor: Color.light,
        borderBottomColor: Color.primary,
        borderBottomWidth: 2,
        // borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Color.primary,
        marginVertical: 10,
    },
});

export default TextBox;

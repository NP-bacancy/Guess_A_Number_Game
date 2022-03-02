/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Color from './../constants/colors';

const TextView = props => {
    return <Text {...props} style={{...styles.textView,...props.style}} />;
};

const styles = StyleSheet.create({
    textView: {
        // height: 30,
        width: '100%',
        backgroundColor: Color.light,
        borderColor: Color.primary,
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'Kanit-Regular',
        textAlign: 'center',
        color: Color.primary,
        marginVertical: 15,
        padding: 5,
    },
});

export default TextView;

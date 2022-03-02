/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Color from './../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.primary,
        padding: 10,
        borderTopColor: Color.secondary,
        borderTopWidth: 2,
        borderBottomColor: Color.secondary,
        borderBottomWidth: 2,
    },
    headerTitle: {
        color: Color.light,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;

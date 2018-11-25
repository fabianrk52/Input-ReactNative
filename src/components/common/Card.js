import React from 'react';
import {View, Text} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle:{
        elevation:1,
        marginTop:5,
        marginLeft:2,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
}


export {Card};
import React, {Components} from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) =>{
    return (
        <View style={style.spinnerStyle}>
            <ActivityIndicator size={size||'large'} />    
        </View>
    )
}

const style={
    spinnerStyle:{
        flex:1,
        jusifyContet:'center',
        alignItems:'center'
    }
}

export {Spinner};
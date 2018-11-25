import React, {Component} from 'react';
import {View} from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyD9_EV3vX1qXrm_r66K3lE4CZfIYYbZt_4",
            authDomain: "authentication-f7b7d.firebaseapp.com",
            databaseURL: "https://authentication-f7b7d.firebaseio.com",
            projectId: "authentication-f7b7d",
            storageBucket: "authentication-f7b7d.appspot.com",
            messagingSenderId: "74156574540"
          });
    }

    render(){
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    };
};
export default App;
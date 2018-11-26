import React, {Component} from 'react';
import {View} from 'react-native';
import { Header,Button,Spinner} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{
    state={
        loggedIn:null,
    };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyD9_EV3vX1qXrm_r66K3lE4CZfIYYbZt_4",
            authDomain: "authentication-f7b7d.firebaseapp.com",
            databaseURL: "https://authentication-f7b7d.firebaseio.com",
            projectId: "authentication-f7b7d",
            storageBucket: "authentication-f7b7d.appspot.com",
            messagingSenderId: "74156574540"
          });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }
            else{
                this.setState({loggedIn:false});
            }
        });
    };

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
            case false:
                return <LoginForm/>
            default:
                return <Spinner size="large"/>
        }
    }

    render(){
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    };
};

export default App;
import { render } from "@testing-library/react";
import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';

export default class facebook extends Component{

    useState = {
        isLoggedIn: false,
        userID:'',
        name: '',
        email: '',
        picture:'',
    }

    responsefacebook = response => {
        console.log('response');
    }

    Componentclicked = () => console.log('clicked');

    render(){
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = null;
    } else {
        fbContent = (<FacebookLogin
        appId='3097944943844260'
        autoload ={true}
        fields ="name,email,picture"
        onclick ={this.Componentclicked}
        callback = {this.responsefacebook} 
        
        />

        );
    } 
    return <div>{fbContent}</div>
    } 
}
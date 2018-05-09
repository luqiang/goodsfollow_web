import React, { Component } from 'react';
export default class Login extends Component{
    render()
    {
        return(
            <React.Fragment>
            <input type="text"></input>
            <input type="password"></input>
            <button>登录</button>
            </React.Fragment>
        );
    }
}
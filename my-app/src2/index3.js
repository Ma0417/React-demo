import React from 'react';
import ReactDOM from 'react-dom';

function LoginOut(props) {
    return <h1>welcome back!</h1>
}
function LoginIn(props) {
    return <h1>please sign up</h1>
}
function Greeting(props) {
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return <LoginOut/>
    }else{
        return <LoginIn/>
    }
}
ReactDOM.render(
    <Greeting isLoggedIn={true}/>,
    document.getElementById('root')
);

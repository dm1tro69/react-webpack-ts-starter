import React from 'react';
import './styles.css'
import Logo from './logo.png'
import ReactLogo from './logo-react.svg'
import ClickCounter from "./ClickConter";

const App = () => {
    return (
        <div>
            <h1> Hello!!  React Typescript - {process.env.NODE_ENV} {process.env.name}</h1>
            <img src={Logo} alt="img"/>
            <img src={ReactLogo} alt="img"/>
            <ClickCounter/>
        </div>
    );
};

export default App;

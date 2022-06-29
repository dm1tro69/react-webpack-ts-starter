import React from 'react';
import './styles.css'
import Logo from './logo.png'
import ReactLogo from './logo-react.svg'

const App = () => {
    return (
        <div>
            <h1>React Typescript</h1>
            <img src={Logo} alt="img"/>
            <img src={ReactLogo} alt="img"/>
        </div>
    );
};

export default App;

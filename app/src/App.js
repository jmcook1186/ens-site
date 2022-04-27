import React, { useState } from 'react';
import './App.css';
import background from "./assets/background.jpg";
// import figure from "./outputs/albedo.jpg"
// import outFile from './outputs/albedo.csv';

function App() {
  

  return (

    <div 
    className="App" 
    style={{ backgroundImage: 'url(' + background + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    }}>

    
    <header style={{position:"absolute", top: 50, left: 100, color: 'white', fontSize: 24}}>
    <b>jmcook.eth</b>
    </header>

    <p style={{position:"absolute",left:100, top: 120, color: 'White', fontSize: 20}}>
    Writing</p>

    <a href="https://mirror.xyz/jmcook.eth/YqHargbVWVNRQqQpVpzrqEQ8IqwNUJDIpwRP7SS5FXs" 
    style={{position:"absolute", left:100, top: 180, color: 'grey', fontSize: 18}}>
    Beacon Chain Attack and Defense</a>

    <a href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA" 
    style={{position:"absolute", left:100, top: 230, color: 'grey', fontSize: 18}}>
    Client diversity on Ethereum's consensus layer</a>

    <a href="https://mirror.xyz/jmcook.eth/ODpCLtO4Kq7SCVFbU4He8o8kXs418ZZDTj0lpYlZkR8" 
    style={{position:"absolute", left:100, top: 280, color: 'grey', fontSize: 18}}>
    Ethereum's energy consumption</a>

    <a href="https://mirror.xyz/jmcook.eth/2_JcKp0By0hhI7FCT9-dvLdhdmL-7y871BwOYUKqzSs" 
    style={{position:"absolute", left:100, top: 330, color: 'grey', fontSize: 18}}>
    DeSci: the case for decentralized science</a>

    <a href="https://mirror.xyz/jmcook.eth/Cq2dj3ihqkYumYmyCD1jDGididAFnUj3f47zI428Vi0" 
    style={{position:"absolute", left:100, top: 380, color: 'grey', fontSize: 18}}>
    Gitcoin DAO FDD onboarding</a>


    <p style={{position:"absolute",left:100, top: 450, color: 'White', fontSize: 20}}>
    Projects</p>

    <a href="https://github.com/jmcook1186/biosnicar-py" 
    style={{position:"absolute", left:100, top: 510, color: 'grey', fontSize: 18}}>
    BioSNICAR: fully features snow and ice albedo model</a>

    <a href="https://github.com/jmcook1186/BrightLink" 
    style={{position:"absolute", left:100, top: 560, color: 'grey', fontSize: 18}}>
    Brightlink: incentivized urban greening</a>
    
    <a href="https://github.com/jmcook1186/beacon-light-client" 
    style={{position:"absolute", left:100, top: 610, color: 'grey', fontSize: 18}}>
    Beacon Light Client: prototype light client in Rust</a>

    <a href="https://github.com/jmcook1186/SciFoundry" 
    style={{position:"absolute", left:100, top: 660, color: 'grey', fontSize: 18}}>
    SciFoundry: PoC decentralized science publishing platform</a>

    <a href="http://www.freepik.com"style={{position:"absolute", bottom:50, right: 50, color: 'grey', fontSize: 12}}>
    Background by starline / Freepik</a>
    </div>

  );
}

export default App;


import React, { Component } from 'react';
import './App.css';
import HDWalletProvider from 'truffle-hdwallet-provider'
import Test from './contracts/Test.json';
import TruffleContract from 'truffle-contract';

const mnemonic = 'nuclear planet mandate sniff egg off beach void need make bullet unable';
class App extends Component {
  constructor(){
    super();
    this.state = {
      owner: 'undefined',
      message: 'undefined',
      account: '0x0',
      instance: ''
    }

    // this.hd = new HDWalletProvider(mnemonic, 'http://127.0.0.1:7545');
    this.hd = new HDWalletProvider(mnemonic, 'http://ropsten.infura.io/v3/13eb2f7a24d048379237d1a85912203c');
    this.test = new TruffleContract(Test);
    this.test.setProvider(this.hd);
  }

  componentDidMount(){
    this.test.deployed().then((i)=> {
      this.www = i
      this.setState({instance: this.www})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My First Dapp</h1>
        </header>
        <div>
          <h1>{this.state.owner}</h1>
          <p>{this.state.message}</p> 
          <p>{this.state.account}</p>
        </div>
      </div>
    );
  }
}

export default App;

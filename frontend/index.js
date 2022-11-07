// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// NEAR
import { Artist } from './near-interface';
import { Wallet } from './near-wallet';

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: 'dev-1666790324765-29375310510305' })
console.log(1111, process.env.CONTRACT_NAME)
const artist = new Artist({ contractId: 'dev-1666790324765-29375310510305', walletToUse: wallet });

// Abstract the logic of interacting with the contract to simplify your flow

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp()
  console.log('isSignedIn', isSignedIn)
  ReactDOM.render(

    <BrowserRouter>
      <App isSignedIn={isSignedIn} artist={artist} wallet={wallet} /></BrowserRouter>,
    document.getElementById('root')
  );
}
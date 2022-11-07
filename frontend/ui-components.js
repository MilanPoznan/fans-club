import React from 'react';

export function SignInPrompt({ greeting, onClick }) {
  return (
    <main>
      <h1> Welcome to Fans Social Club!</h1>
      <p>
        Please signin with your wallet & chose registration method
      </p>
      <br />
      <p style={{ textAlign: 'center' }}>
        <button onClick={onClick}>Sign in with NEAR Wallet</button>
      </p>
    </main>
  );
}

export function SignOutButton({ accountId, onClick }) {
  return (
    <button onClick={onClick}>
      Sign out {accountId}
    </button>
  );
}


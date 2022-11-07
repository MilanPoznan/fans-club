import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/GlobalTheme'

import './components/styles/global.css';

//Components 
import { SignInPrompt, SignOutButton } from './ui-components';
import NonSignedHomepage from './components/NonSignedHomepage'
import RegisterArtistForm from './components/RegisterArtistForm';
import RegisterUserForm from './components/user/RegisterUserForm';
import LendingPage from './components/LendingPage'
import ArtistList from './components/ArtistList';
import SingleArtistTemplate from './components/SingleArtistTemplate';


import './style.css'
import Header from './components/Header'

import { Routes, Route } from "react-router-dom";
import './components/styles/normalize.css'

export default function App({ isSignedIn, artist, wallet }) {


  console.log(artist)
  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <NonSignedHomepage wallet={wallet} />;
    // signing in  onClick={() => wallet.signIn()
  }

  console.log(theme)
  return (
    <>
      <ThemeProvider theme={theme}>

        <Header wallet={wallet} isSignedIn={isSignedIn} />
        <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} >Signout</SignOutButton>
        <main>
          <Routes>
            <Route path={`/register-artist`} element={<RegisterArtistForm artist={artist} />} exact />
            <Route path={`/artist-list`} element={<ArtistList artist={artist} />} exact />
            <Route path={`/register-user`} element={<RegisterUserForm artist={artist} />} exact />
            <Route path={`/register-user`} element={<LendingPage />} exact />
            <Route path={"/single-artist/:id"} element={<SingleArtistTemplate artistContract={artist} />} />
            <Route path='/' element={<LendingPage artist={artist} />} />
          </Routes>

        </main>
      </ThemeProvider>

    </>
  );
}

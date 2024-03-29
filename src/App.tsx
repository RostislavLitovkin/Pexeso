import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { GameWithText } from './GameWithText';
import { HowToUse } from './HowToUse';
import { Menu } from './Menu';
import { Setup } from './Setup';

const BackgroundLayout = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: #111;
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <BackgroundLayout>
      <HashRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/Game" element={<GameWithText />} />
                <Route path="/Setup" element={<Setup />} />
                <Route path="/HowToUse" element={<HowToUse />} />
            </Routes>
        </HashRouter>
    </BackgroundLayout>
  );
}

export default App;
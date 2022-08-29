import React from 'react';
import styled from 'styled-components';
import { Game } from './Game';

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
      <Game pieces={10}/>
    </BackgroundLayout>
  );
}

export default App;
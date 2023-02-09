import React, { useState, useEffect } from 'react';
import { Title, MainPC, MainAN } from './styles';
import { SearchForm } from './App_2';

function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window.matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <div >
      {matches && (
        <MainPC>
          <Title>What's the weather like?</Title>
          <SearchForm />
        </MainPC>
      )}
      
      {!matches && (/*Este código permite ser responsive, porém não está a ser utilizado de forma eficiente */
        <MainAN>
          <Title>What's the</Title>
          <Title>weather like?</Title>
          <SearchForm />
        </MainAN>
      )}
    </div>

  );
}
/*
 */
export default App;

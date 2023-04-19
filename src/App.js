import React, { useState } from 'react';
import Container from './components/Container';
import DateContext from './context/DateContext';

function App() {

  const [startDate, setStartDate] = useState('');

  return (
    <DateContext.Provider
      value={{
        startDate,
        setStartDate
      }}>
      <div>
        <Container />
      </div>    
    </DateContext.Provider>
  );
}

export default App;

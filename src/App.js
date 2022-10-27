import React from 'react';
import './App.css';
import AppProvider from './context/appProvider';
import Table from './components/Table';
import Forms from './components/Forms';

function App() {
  return (
    <AppProvider>
      <Forms />
      <Table />
    </AppProvider>

  );
}

export default App;

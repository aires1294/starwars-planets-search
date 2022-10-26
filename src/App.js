import React from 'react';
import './App.css';
import AppProvider from './context/appProvider';
import Table from './components/table';

function App() {
  return (
    <AppProvider>
      <Table />
    </AppProvider>

  );
}

export default App;

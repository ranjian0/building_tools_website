import React from 'react';
import {HashRouter} from 'react-router-dom';
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <HashRouter basename="/">
      <MainLayout />
    </HashRouter>
  );
}

export default App;

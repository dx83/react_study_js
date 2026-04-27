import React, { useEffect } from 'react';
import Main from './components/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Study00 from './components/Study00';
import Study01 from './components/Study01';
import Study02 from './components/Study02';


const App = () => {
  return (
    <div className="App">
      <Main />
      <hr />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/study00" element={<Study00 />} />
        <Route path="/study01" element={<Study01 />} />
        <Route path="/study02" element={<Study02 />} />

      </Routes>

    </div>

  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/login' element={<LoginPage />}></Route>
        <Route exact path='/register' element={<RegisterPage />}></Route>
        <Route exact path='/dashboard' element={<Dashboard />}></Route>
        <Route exact path='/' element={<Navigate to='/dashboard' />}></Route>
      </Routes>
    </Router>
    <AlertNotification />
    </>
  );
}

export default App;

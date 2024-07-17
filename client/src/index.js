import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login/index'
import Register from './pages/register/index'
import VerifyEmail from './pages/user/verify-email'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from './context/auth-context';
import { ToastProvider } from './context/toast-context';
import AuthRoute from './components/molecules/auth-route';
import Create from './pages/document/create'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user/verify-email/:token" element={<VerifyEmail />}/>
            <Route path="/document/create" element={<Create />} />
          </Routes>   
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
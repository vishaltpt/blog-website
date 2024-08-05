import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Register from './register/Register';
import Home from './pages/home/Home';
import Single from './Singlepage/Single';
import Write from './Writes/Write';
import Logout from './logout/Logout';
import Setting from './setting/Setting'
import Contact from './contact/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/single" element={<Single />} />
        <Route path="/write" element={<Write />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
    </>
  );
};

export default App;

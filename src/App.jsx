import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar'; // Import the Navbar component
import HomePage from './Homepage';
import AboutUs from './AboutUS';
import ScoringSystem from './components/ScoringSystem';
import Testimonials from './components/Testimonials';
import JoinNow from './components/JoinNow';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      if(user){
        setCurrentUser(user);
      } else{
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <NavbarComponent currentUser={currentUser}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/scoring' element={<ScoringSystem />} />
        <Route path='/testimonial' element={<Testimonials />} />
        <Route path='/register' element={<JoinNow />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

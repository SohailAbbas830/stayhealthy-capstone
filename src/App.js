import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Notification from './components/Notification';
import Reviews from './components/Reviews';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <BookingForm />
      <Notification />
      <Reviews />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
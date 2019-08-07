import React from 'react';
import './App.css';
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'
import PageMain from './pages/PageMain'

function App() {
  return (
    <div className="App wrapper">
      <Header/>
      <Sidebar/>
      <PageMain/>
      <Footer/>
    </div>
  );
}

export default App;

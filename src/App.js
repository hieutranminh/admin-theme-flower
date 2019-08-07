import React from 'react';
import './App.css';
import Header from './components/layouts/Header'
import Sidebar from './components/layouts/Sidebar'
import Footer from './components/layouts/Footer'
import PageMain from './containers/PageMain'
import PageProduct from './containers/ProductManagement/PageProduct'
import MenuList from './containers/HomeManagement/Menu/MenuList'
import Slider from './containers/HomeManagement/Slider/Slider'
import Collection from './containers/HomeManagement/Collection/Collection'
import BrandPartner from './containers/HomeManagement/BrandPartner/BrandPartner'

function App() {
  return (
    <div className="App wrapper">
      <Header/>
      <Sidebar/>
      <PageMain/>
      <PageProduct/>
      <MenuList/>
      <Slider/>
      <Collection/>
      <BrandPartner/>
      <Footer/>
    </div>
  );
}

export default App;

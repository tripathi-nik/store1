import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './containers/banner/Banner';
import Appcontainer from './containers/appcontainer/Appcontainer';
import Footer from './containers/footer/Footer';
import Public from './router/Public';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Appcontainer/>
      <Footer/>
    </div>
  );
}

export default App;

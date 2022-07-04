import React from "react";
import './App.css'
import Header from "./piza/Header";
import Navbar from "./piza/NavMenu/Navbar";
import Home from "./piza/NavMenu/Home";
import Menu from "./piza/NavMenu/Menu";
import Location from "./piza/NavMenu/Location";
import Franchies from "./piza/NavMenu/Franchies";
import Contact from "./piza/NavMenu/Contact";
import Feedback from "./piza/NavMenu/Feedback";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Footer from "./piza/NavMenu/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
            <Header/>
            <Navbar/>
            <Home/>
            </>
          }></Route>  

          <Route path="/Menu" element={
            <>
            <Header/>
            <Navbar/>
            <Menu/>
            <Footer/>
            </>
          }></Route>
          
          <Route path="/Location" element={
            <>
            <Header/>
            <Navbar/>
            <Location/>
            <Footer/>
            </>
          }></Route>


          <Route path="/Franchies" element={
            <>
            <Header/>
            <Navbar/>
            <Franchies/>
            <Footer/>
            </>
          }></Route>

          <Route path="/Contact" element={
            <>
            <Header/>
            <Navbar/>
            <Contact/>
            <Footer/>
            </>
          }></Route> 

        <Route path="/Feedback" element={
            <>
            <Header/>
            <Navbar/>
            <Feedback/>
            <Footer/>

            </>
          }></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

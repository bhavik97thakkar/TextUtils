
import React, { useState } from 'react';
//import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './fonts/OpenSans.ttf';
import './fonts/Poppins_Regular.ttf';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Routes
} from "react-router-dom";

// import PropTypes from 'prop-types'


function App() {

  document.body.style.fontFamily = 'Poppins_Regular';
  //const [text,setText]= useState('Enable dark mode')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

// const removeBodyClasses=()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-success')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-primary')
//   document.body.classList.remove('bg-warning')
// }
  const [mode, setMode] = useState('light')//wheter dark mode is on or off
  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode(`dark`);
      document.body.style.backgroundColor = '#212529';
      // document.body.style.fontFamily='OpenSans';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode(`light`);
      document.body.style.backgroundColor = 'white';
      // document.body.style.fontFamily='OpenSans';
      showAlert("Light Mode Enabled", "success");
    }
  }


  // if(text==='Enable dark mode'){
  //   setText('Enable light mode')
  // }
  // else{
  //   setText('Enable dark mode')
  // }
  return (
    <>
      {/* <Navbar title="Navbar" aboutText="About Us"/> if not using default props in navbar.js use this */}
      {/* <hr style={{width:'100vw', backgroundColor:'#6c757d', marginTop:'1px'}} /> */}
      {/* <About/> */}
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm heading="Please Enter Some Text" mode={mode} showAlert={showAlert} />
            </Route>
            <Route path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>



      {/* <TextForm heading="Please Enter Some Text" mode={mode} showAlert={showAlert}/> */}
      {/* <About/> */}

    </>
  );
}

export default App


/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './App.css'

function App() {

  const [isDark, setDark] = useState(true);


  // const setDarkMode = ()=>{
  //   document.querySelector("body").setAttribute("data-theme", "dark");
  //   localStorage.setItem("selected-theme", "dark");
  // }

  // const setLightMode = ()=>{
  //   document.querySelector("body").setAttribute("data-theme", "light");
  //   localStorage.setItem("selected-theme", "light");
  // }

  // const SelectedTheme = localStorage.getItem("selected-theme");
  // if(SelectedTheme == "dark"){
  //   setDarkMode();
  // }else{
  //   setLightMode();
  // }

  // const toggleTheme = ()=>{
  //   if(isDark){
  //     setLightMode();
  //     setDark(false);
  //   }
  //   else{
  //     setDarkMode();
  //     setDark(true);
  //   }
  // }

  
  const [theme, setTheme] = useState("light");

  const toggleTheme = ()=>{
    if(theme == "light"){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  }

  return (
    <div id={theme}>
      <div>
        {/* <button onClick={toggleTheme}>dark light</button> */}
        <button onClick={toggleTheme}>dark light</button>
      </div>
      <p className="my-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod atque eos eum quis vero cum, voluptatibus dicta, rerum ut deleniti fugiat itaque saepe cumque recusandae tenetur sequi dolores voluptates? Quaerat minima beatae optio exercitationem corrupti, doloremque eveniet officia eius mollitia voluptatem repellendus alias eligendi, libero quibusdam totam, tenetur velit aliquid.
      </p>
    </div>
  )
}

export default App

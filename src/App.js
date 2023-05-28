import logo from './logo.svg';
import { useEffect } from 'react';
import groups from './utils/groups';
import cities from './utils/cities';
import categories from './utils/categories';
import { RouterProvider, } from "react-router-dom";
import router from "./router";
import './App.css';

function App() {
  useEffect(() => {
    console.log(categories);
  }, [])

  return (
    <RouterProvider router={router} />

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

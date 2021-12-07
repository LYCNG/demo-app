
import './App.css';
import React,{Fragment,Suspense,lazy} from 'react';
import { Route,Routes } from "react-router-dom";
import { HashRouter} from 'react-router-dom'
import Home from './page/Home'
function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Suspense fallback={<Fragment />}>

        </Suspense> */}
      </Routes>
    </HashRouter>
  );
}

export default App;

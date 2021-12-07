
import './App.css';
import React,{Fragment,Suspense,lazy} from 'react';
import { Route,Routes } from "react-router-dom";
import { HashRouter} from 'react-router-dom'
import Home from './page/Home'
import New from './page/New'
function App() {


  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path={"/new"} element={<New />}/>
        {/* <Suspense fallback={<Fragment />}>

        </Suspense> */}
      </Routes>
    </HashRouter>
  );
}

export default App;

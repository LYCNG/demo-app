
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux' //綁定action Creator 和dispatch
import {actionCreators} from './state/index' // 建立action的index，寫入需要的action return {type:"",payload}
import Google from './assets/img/Google.svg.png';
import GA from './assets/img/ga.png';
import React,{useState} from 'react';

function App() {

  const  {src} = useSelector((state)=>state.logo);
  const dispatch = useDispatch();
  const {switchToGA,switchToGoogle} = bindActionCreators(actionCreators,dispatch);


  return (
    <div className="App">
      <h1>Nice to Meet UUU!!!</h1>
      <img alt="" src={src} width="300" height="300"/>
      <button onClick={switchToGA}>Switch to GA!!!</button>
      <button onClick={switchToGoogle}>Switch to Google!!!</button>
    </div>
  );
}

export default App;

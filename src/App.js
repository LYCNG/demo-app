
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux' //綁定action Creator 和dispatch
import {actionCreators} from './state/index' // 建立action的index，寫入需要的action return {type:"",payload}
import Google from './assets/img/Google.svg.png';
import GA from './assets/img/ga.png';
import React,{useState} from 'react';

function App() {

  // const account = useSelector((state)=>state.account);
  // const dispatch = useDispatch();
  
  // const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);
  const [state,setState] = useState(GA)
  let g = Google
  let ga = GA
  return (
    <div className="App">
      <h1>Nice to Meet UUU!!!</h1>
      <img alt="" src={state} width="300" height="300"/>
      <button onClick={()=>setState(prev=>prev===ga?g:ga)}>Switch!!!</button>
    </div>
  );
}

export default App;

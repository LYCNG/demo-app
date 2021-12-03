
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux' //綁定action Creator 和dispatch
import {actionCreators} from './state/index' // 建立action的index，寫入需要的action return {type:"",payload}

function App() {

  const account = useSelector((state)=>state.account);
  const dispatch = useDispatch();
  
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);
  

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>depositMoney(1000)}>Deposit</button>
      <button onClick={()=>withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;

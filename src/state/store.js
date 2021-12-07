import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'demo',//can change
    storage: storage,
    stateReconciler: autoMergeLevel2, // 檢視 'Merge Process' 部分的具體情況
    timeout:null,
};

const myPersistReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
    // reducers,
    // {},
    myPersistReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);

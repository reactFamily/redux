import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import reducer from './reducers';
import {createStore} from 'redux';

const store = createStore(reducer);
const rootEle = document.getElementById('root');

const render = () => ReactDOM.render(
    <Counter value={store.getState()}
             onDecrement={() => store.dispatch({type: 'DECREMENT'})}
             onIncrement={() => store.dispatch({type: 'INCREMENT'})}/>,
    rootEle
);

render();
store.subscribe(render);
/** create index.js file
 * then create package.json through type command in
 * terminal = npm init -y
 * then install redux = npm install Redux
 * Now we install a middleware = npm install redux-logger 
 * to use applyMiddleware in Redux
 * then install = npm i -g json-server
 * to run json server
 * then run this command in cmd because terminal will not run this = json-server db.json
*/



/** to increment amoumt */

//Using  multi reducer type concept 

import { createStore, applyMiddleware, combineReducers } from 'redux'  // import aplyMiddleware
import logger from 'redux-logger' //import logger 
import axios from 'axios';
import thunk from 'redux-thunk';

// action name constants (used to resolve the conflict kyunki increment , decrement wagarh bhot baar repeat ho rha hai 
// if condition  mein aur action creator aur dispatch mein bhi)
const inc = 'account/increment'; // schema/then reducer
const dec = 'account/decrement';
const incByAmo = '/account/incrementByAmount';
const incBonus = 'bonus/increment';
const init = 'account/init';


//to make Store
const store = createStore(
    combineReducers({ //it is like we made reducer in test.js file
        account: accountReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger.default, thunk.default)); // using logger because it is a middleware



//initialize state here
function accountReducer(state = { amount: 1 }, action) { // state means previous state and action means the action we doing like add, remove etc.

    // here state of amount is immutable (means the original state not change but copy of original create and change)
    switch (action.type) {
        case init:
            return { amount: action.payload };

        case inc:
            return { amount: state.amount + 1 };

        case dec:
            return { amount: state.amount - 1 };

        case incByAmo:
            return { amount: state.amount + action.payload };

        default:
            return state
    }
}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 };
        case incByAmo:
            if (action.payload >= 100)
                return { points: state.points + 1 };
        default:
            return state;
    }
}





//Action Creator it should be synchronous
// now make this initUser change into getUser
//also give dynamic id to the api

function getUser(id) { // new action for thunk (here dispatch, and getState(to get global state) used )

    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`) //ye db.json ka accounts ka data le rhe hai
        dispatch(initUser(data.amount))
        // dispatch({type: init, payload: data.amount})
    }
}



function initUser(value) {

    return { type: init, payload: value }
}

function increment() {
    return { type: inc }
}
function decrement() {
    return { type: dec }
}
function incrementByAmount(value) {
    return { type: incByAmo, payload: value } //it is like plain object
}
function incrementBonus(value) {
    return { type: incBonus } //it is like plain object
}


setTimeout(() => {
   
    // store.dispatch(getUser(2))// db.json ke acccounts ki id=2
    // store.dispatch(incrementByAmount(200)) 
    store.dispatch(incrementBonus()) 
}, 100)

/*
output:

 action undefined @ 11:55:15.844
   prev state { account: { amount: 1 }, bonus: { points: 0 } }
   action     [AsyncFunction (anonymous)]
   next state { account: { amount: 1 }, bonus: { points: 0 } }
 action init @ 11:55:15.961
   prev state { account: { amount: 1 }, bonus: { points: 0 } }
   action     { type: 'init', payload: 100 }
   next state { account: { amount: 100 }, bonus: { points: 0 } }
  
   */
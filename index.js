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

//create thunk middleware

import { createStore, applyMiddleware } from 'redux'  // import aplyMiddleware
import logger from 'redux-logger' //import logger 
import axios from 'axios';
import thunk from 'redux-thunk';

// action name constants (used to resolve the conflict kyunki increment , decrement wagarh bhot baar repeat ho rha hai 
// if condition  mein aur action creator aur dispatch mein bhi)
const inc = 'increment'; // string(increment) convert into constant
const dec = 'decrement';
const incByAmo = 'incrementByAmount';
const init = 'init';


//to make Store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default)); // using logger because it is a middleware



//initialize state here
function reducer(state = { amount: 1 }, action) { // state means previous state and action means the action we doing like add, remove etc.

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


//Async API call
// async function getUser() {
//     const { data } = await axios.get('http://localhost:3000/accounts/1') //ye db.json ka accounts ka data le rhe hai
//     console.log(data)
// }

// getUser();





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


// //history of commands
// const history= []
// store.subscribe(()=>{
//     history.push(store.getState())
//     console.log(history)
// })



setTimeout(()=>{
    // store.dispatch(increment())
    // store.dispatch(incrementByAmount(300))
    // store.dispatch(getUser(1))// db.json ke acccounts ki id=1
    store.dispatch(getUser(2))// db.json ke acccounts ki id=2
},100)


//sabka ek saath output:

// action increment @ 08:51:07.815
// prev state { amount: 1 }
// action     { type: 'increment' }
// next state { amount: 2 }
// action incrementByAmount @ 08:51:07.825
// prev state { amount: 2 }
// action     { type: 'incrementByAmount', payload: 300 }
// next state { amount: 302 }
// action undefined @ 08:51:07.827
// prev state { amount: 302 }
// action     [AsyncFunction (anonymous)]
// next state { amount: 302 }
// action undefined @ 08:51:07.872
// prev state { amount: 302 }
// action     [AsyncFunction (anonymous)]
// next state { amount: 302 }
// action init @ 08:51:07.917
// prev state { amount: 302 }
// action     { type: 'init', payload: 200 }
// next state { amount: 200 }
// action init @ 08:51:07.925
// prev state { amount: 200 }
// action     { type: 'init', payload: 100 }
// next state { amount: 100 }



// sirf getUser ka output:

// action undefined @ 08:52:13.668
//    prev state { amount: 1 }
//    action     [AsyncFunction (anonymous)]
//    next state { amount: 1 }
//  action init @ 08:52:13.739
//    prev state { amount: 1 }
//    action     { type: 'init', payload: 100 }
//    next state { amount: 100 }

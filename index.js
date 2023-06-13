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


// action name constants (used to resolve the conflict kyunki increment , decrement wagarh bhot baar repeat ho rha hai 
// if condition  mein aur action creator aur dispatch mein bhi)
const inc = 'increment'; // string(increment) convert into constant
const dec = 'decrement';
const incByAmo = 'incrementByAmount';
const init = 'init';


//to make Store
const store = createStore(reducer, applyMiddleware(logger.default)); // using logger because it is a middleware



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


//Action Creator
function initUser(value) { // new action for thunk 
    return { type: init, payload: value}
}
function increment() {
    return { type: inc }
}
function decrement() {
    return { type: dec }
}
function incrementByAmount(value) {
    return { type: incByAmo, payload: value }
}





//global state
console.log(store.getState())

//calling action creator
store.dispatch(increment()) // increment to increase value
store.dispatch(decrement()) // decrement  to decrease the value
store.dispatch(incrementByAmount(4)) // here payload must be given it will like a gap between the values
store.dispatch(initUser(400)) // here payload must be given it will make gap b/w values


// new state(c hanges)
console.log(store.getState())


/** create index.js file
 * then create package.json through type command in
 * terminal = npm init -y
 * then install redux = npm install Redux
 * Now we install a middleware = npm install redux-logger 
 * to use applyMiddleware in Redux
*/



/** to increment amoumt */

//Now create function for action called action creator

import {createStore, applyMiddleware} from 'redux'  // import aplyMiddleware
import logger from 'redux-logger' //import logger 

// action name constants (used to resolve the conflict kyunki increment , decrement wagarh bhot baar repeat ho rha hai 
// if condition  mein aur action creator aur dispatch mein bhi)
const inc = 'increment'; // string(increment) convert into constant
const dec = 'decrement';
const incByAmo= 'incrementByAmount';


//to make Store
const store = createStore(reducer, applyMiddleware(logger.default)); // using logger because it is a middleware



//initialize state here
function reducer(state={amount: 1}, action){ // state means previous state and action means the action we doing like add, remove etc.

    //immutable (means the original state not change but copy of original create and change)
    if(action.type === inc)
    {
        return {amount: state.amount+1} 
    }
    if(action.type=== dec)
    {
        return {amount: state.amount -1}
    }
    if(action.type=== incByAmo ){

        return {amount: state.amount + action.payload}
    }
    
    return state 
}


//Action Creator
function increment(){
    return{type: inc}
}
function decrement(){
    return{type: dec}
}
function incrementByAmount(value){
    return{type: incByAmo , payload:value}
}





//global state
console.log(store.getState())

//calling action creator
store.dispatch(increment()) // increment to increase value
store.dispatch(decrement()) // decrement  to decrease the value
store.dispatch(incrementByAmount(4)) // here payload must be given it will like a gap between the values


// new state(c hanges)
console.log(store.getState())


/* output:
{ amount: 1 }
 action increment @ 14:48:10.794
   prev state { amount: 1 }
   action     { type: 'increment' }
   next state { amount: 2 }
{ amount: 2 }

*/
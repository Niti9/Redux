/** create index.js file
 * then create package.json through type command in
 * terminal = npm init -y
 * then install redux = npm install Redux
 * Now we install a middleware = npm install redux-logger 
 * to use applyMiddleware in Redux
*/



/** to increment amoumt */

import {createStore, applyMiddleware} from 'redux'  // import aplyMiddleware
import logger from 'redux-logger' //import logger 

//to make Store
const store = createStore(reducer, applyMiddleware(logger.default)); // using logger because it is a middleware



//initialize state here
function reducer(state={amount: 1}, action){ // state means previous state and action means the action we doing like add, remove etc.

    //immutable (means the original state not change but copy of original create and change)
    if(action.type ==='increment')
    {
        return {amount: state.amount+1} 
    }
    if(action.type==='decrement')
    {
        return {amount: state.amount -1}
    }
    if(action.type==='incrementByAmount'){

        return {amount: state.amount + action.payload}
    }
    
    return state 
}






//global state
console.log(store.getState())

//action with dispatch means like click function
store.dispatch({type:'increment'}) // increment to increase value
store.dispatch({type:'decrement'}) // decrement  to decrease the value
store.dispatch({type:'incrementByAmount', payload:4}) // here payload must be given it will like a gap between the values


// new state(changes)
console.log(store.getState())


/* output:
{ amount: 1 }
 action increment @ 14:48:10.794
   prev state { amount: 1 }
   action     { type: 'increment' }
   next state { amount: 2 }
{ amount: 2 }

*/
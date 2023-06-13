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
    
    return state 
}

//global state
console.log(store.getState())

//action with dispatch means like click function
store.dispatch({type:'increment'}) // increment is predefined to increase value

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
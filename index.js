/** create indez.js file
 * then create package.json through type command in
 * terminal = npm init -y
 * then install redux = npm install Redux
 */


/**  Starting of Redux(pure redux)
 * redux is used to make  a state(koi data store karne ke liye)
 * and then we can do any action on that state
 * hum usse change kar sakte hai use kar sakte hai kahin bhi
*/

/* example of normal redux code

// import createStore
import {createStore} from 'redux'  // here createStore already depict or remove but we will use it

//to make Store
const store = createStore(reducer); // reducer are some functions

function reducer(state, action){ // state means previous state and action means the action we doing like add, remove etc.

    return state // to get new state
}

//global state
console.log(store.getState())

output:
undefined

*/



/** to increment amout */

import {createStore} from 'redux'  // here createStore already depict or remove but we will use it

//to make Store
const store = createStore(reducer); // reducer are some functions

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
store.dispatch({type:'increment'})

// new state(changes)
console.log(store.getState())
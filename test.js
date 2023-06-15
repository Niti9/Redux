// Example of multi reducers but we will not use it in index.js because it create complexity
const state = { account: { amount: 1 }, bonus: { points: 2 } };
// const newState = { account: { amount: state.account.amount }, bonus: { points: state.bonus + 1 } };
const newState = { account: {...state.account}, bonus: { points: state.bonus + 1 } };

console.log(newState, state);
state.account.amount = 100;
console.log(newState, state);

/* output:
{ account: { amount: 1 }, bonus: { points: '[object Object]1' } } { account: { amount: 1 }, bonus: { points: 2 } }
{ account: { amount: 1 }, bonus: { points: '[object Object]1' } } { account: { amount: 100 }, bonus: { points: 2 } }
*/
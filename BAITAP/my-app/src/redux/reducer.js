import { SET_CART, GET_CART } from "./action";

const initialState = {
  cart: ["van", "su", "dia"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
      // let newstate = {...state}
      // newstate.cart = action.data
      // return newstate;
      break;
    default:
      return state;
  }
};
export default reducer;

// import {SET_CART,GET_CART} from './action'

// const initialState = {
//     cart: ['Van','Su','Dia']
// };

// const rootReducer = (state = initialState, action) => {
//     // Handle các actions gửi lên
//     /*
//         {
//             type: SET_USERNAME,
//             payload: 'NVA'
//         }
//     */
//     switch (action.type) {
//         case SET_CART:
//             return { ...state, cart: action.payload };
//             break;
//         default:
//             return state;
//     }
// };

// export default rootReducer;

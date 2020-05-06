import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brewery, abv, origin, pintPrice, kegLevel, id, amtSold} = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brewery: brewery,
          abv: abv, 
          origin: origin, 
          pintPrice: pintPrice,
          kegLevel: kegLevel, 
          id: id
        }
      });
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.SALES_REPORT:
      let newKegLevel = (state[id].kegLevel -= amtSold)
      const updatedState = {...state, [id]: { ...state[id], kegLevel: newKegLevel }};
      return updatedState;

    case c.KEG_DETAILS:
      const detailState = {
        name, 
        brewery, 
        abv, 
        origin, 
        pintPrice, 
        kegLevel, 
        id
      }
      return detailState;
    default:
      return state;
  }
};
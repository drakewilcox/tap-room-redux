import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brewery, abv, origin, pintPrice, kegLevel, id } = action; 

  switch (action.type) {
    case c.SELECTED_KEG: 
      const newState = {
        name: name, 
        brewery: brewery, 
        abv: abv, 
        origin: origin,
        pintPrice: pintPrice, 
        kegLevel: kegLevel, 
        id: id 
      }
      return newState; 
    default: 
      return state; 
  }
}
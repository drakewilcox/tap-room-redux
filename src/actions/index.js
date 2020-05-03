import * as c from './ActionTypes';

// export const deleteTicket = id => ({
//   type: c.DELETE_TICKET,
//   id
// });

// export const toggleForm = () => ({
//   type: c.TOGGLE_FORM
// });

export const addKeg = (keg) => {
  const { name, brewery, abv, origin, pintPrice, kegLevel, id } = keg;
  return {
    type: c.ADD_KEG, 
    name: name, 
    brewery: brewery,
    abv: abv,
    origin: origin, 
    pintPrice: pintPrice, 
    kegLevel: kegLevel, 
    id: id
  }
}
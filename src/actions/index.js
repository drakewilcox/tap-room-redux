import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

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

export const kegDetails = (keg) => {
  const { name, brewery, abv, origin, pintPrice, kegLevel, id } = keg; 
  return {
    type: c.KEG_DETAILS, 
    name: name, 
    brewery: brewery,
    abv: abv,
    origin: origin, 
    pintPrice: pintPrice, 
    kegLevel: kegLevel, 
    id: id
  }
}
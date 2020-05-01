export default (state = {}, action) => {
  const { name, brewery, abv, origin, pintPrice, kegLevel, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
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
    case 'DELETE_KEG':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
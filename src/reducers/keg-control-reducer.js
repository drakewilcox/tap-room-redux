export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_KEG':
      const { name, brewery, abv, origin, pintPrice, kegLevel, id } = action;
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
    default:
      return state;
  }
};
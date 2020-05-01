import kegControlReducer from '../../reducers/keg-control-reducer';

describe('kegControlReducer', () => {
  let action; 
  const kegData = {
    name: 'Pilsner',
    brewery: 'Pfriem',
    abv: '5.0%',
    origin: 'OR',
    pintPrice: 5,
    kegLevel: 124,
    id: 1
  };

  test ('Should return default state if there is no action passed into the reducer', () => {
      expect(kegControlReducer({}, {type: null })).toEqual({});
    });
  
  test ('Should successfully add new keg data to kegList', () => {
    const {name, brewery, abv, origin, pintPrice, kegLevel, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brewery: brewery,
      abv: abv, 
      origin: origin, 
      pintPrice: pintPrice,
      kegLevel: kegLevel, 
      id: id
    };
    expect(kegControlReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brewery: brewery,
        abv: abv, 
        origin: origin,
        pintPrice: pintPrice,
        kegLevel: kegLevel, 
        id: id
      }
    });
  });
  
});
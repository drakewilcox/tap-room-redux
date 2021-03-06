import kegControlReducer from '../../reducers/keg-control-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegControlReducer', () => {
  let action; 
  const currentState = {
    1: {name: 'Pilsner',
    brewery: 'Pfriem',
    abv: '5.0%',
    origin: 'OR',
    pintPrice: 5,
    kegLevel: 124,
    id: 1 },
    2: {name: 'City of Dreams',
    brewery: 'Fort George',
    abv: '6.9%',
    origin: 'OR',
    pintPrice: 6,
    kegLevel: 124,
    id: 2 },
  };

  test ('Should return default state if there is no action passed into the reducer', () => {
      expect(kegControlReducer({}, {type: null })).toEqual({});
    });
  
  test ('Should successfully add new keg data to kegList', () => {
    const {name, brewery, abv, origin, pintPrice, kegLevel, id } = currentState;
    action = {
      type: c.ADD_KEG,
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

  test('Should successfully delete a keg', () => {
    action ={
      type: c.DELETE_KEG,
      id:1
    };
    expect(kegControlReducer(currentState, action)).toEqual({
      2: {name: 'City of Dreams',
      brewery: 'Fort George',
      abv: '6.9%',
      origin: 'OR',
      pintPrice: 6,
      kegLevel: 124,
      id: 2 }
    });
  });

  test('Should successfully update kegLevel of a single keg', () => {
    const action = {
      type: c.SALES_REPORT,
      id: 1, 
      amtSold: 10
    };

    const updatedState = {
      [1]: {name: 'Pilsner',
      brewery: 'Pfriem',
      abv: '5.0%',
      origin: 'OR',
      pintPrice: 5,
      kegLevel: 114,
      id: 1 },
      [2]: {name: 'City of Dreams',
      brewery: 'Fort George',
      abv: '6.9%',
      origin: 'OR',
      pintPrice: 6,
      kegLevel: 124,
      id: 2 }

    };
    expect(kegControlReducer(currentState, action)).toEqual(updatedState);
  });

  test('Should successfully display selected keg', () => {
    const action = {
      type: c.KEG_DETAILS,
      name: 'City of Dreams',
      brewery: 'Fort George',
      abv: '6.9%',
      origin: 'OR',
      pintPrice: 6,
      kegLevel: 124,
      id: 2
    }

    expect(kegControlReducer({}, action)).toEqual({
      name: 'City of Dreams',
      brewery: 'Fort George',
      abv: '6.9%',
      origin: 'OR',
      pintPrice: 6,
      kegLevel: 124,
      id: 2 
    })
  })
});